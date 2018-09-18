import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import config from '../config/config';
import passport from 'passport';
import  async from 'async';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import User from '../models/user.model';




// sample user, used for authentication
const user = {
  username: 'react',
  password: 'express'
};

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
passport.authenticate('localLogin',(err,user,info) => {
  if(err) return next(err);
  //not authenticated return {erro:message}
  if(!user) return res.status(httpStatus.UNAUTHORIZED).json(info);
  req.logIn(user, (err) => {
    if(err) next(err);
    //console.log(req.user);

    return res.redirect(`/api/users/${user._id}`);
  })
})(req,res,next);

  // const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  // return next(err);
}

function logout(req, res) {
  req.logout();
  res.json({message: `Logout User`})
  //res.redirect('/'); actual
}




/**
 * Create token and send via email
 * @param req
 * @param res
 * @param next
 * @property {string} req.body.email - email to reset password
 * @returns {*}
 */

function forgotPassword(req, res, next) {

  async.waterfall([
    function(done) {
      crypto.randomBytes(20, (err, buf) => {
        var token = buf.toString('hex');
        done(err,token);
      });
    },
    function (token, done) {
      User.findOne({email: req.body.email}, function(err, user) {
        if(!user) {
          return res.json({error: 'No user with that email!'});
        }
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; //1Hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },

    function(token, user, done) {
      let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.email, // generated ethereal user
            pass: config.password // generated ethereal password
        }
      });
      let mailOptions = {
        from: 'fuhaustine@gmail.com',
        to: 'fuhaustin@gmail.com',
        subject: 'Express password rest',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/api/auth/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      }; 
      smtpTransport.sendMail(mailOptions, function(err, info) {
        if(err) {
          if(err.errno) {
            return res.status(httpStatus.SERVICE_UNAVAILABLE).json(err);
          }

          return res.status(httpStatus.UNAUTHORIZED).json(err);
        };
      // Preview only available when sending through an Ethereal account
        res.json({info:`An email has been sent to ${user.email} with futher info`});
      })
    }
  ], function(err) {
    if(err) return next(err);
  });
}

/**
 * Display a page reset password
 * @param req
 * @param req
 * @param next
 * @property {string} req.params.token - Token recieved from email 
 */
function reset(req, res, next) {
  User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
   .then((user) => {
     if (!user) return res.json({"error": "Password reset Token is invalid or  has expired"})
     res.json({info: 'ready for password reset', user: user});
   })
   .catch(e => next(e));
}

/**
 * Verify is token is still valid, reset password and send email to user
 * @property {string} req.body.password - new password 
 */

 function resetPassword(req, res, next) {
   async.waterfall([
     function(done) {
       User.findOne({resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user) => {
          if(!user) return res.json({"error": "Password reset Token is invalid or has expired"});
          
          user.password = req.body.password;
          user.resetPasswordToken = undefined;
          user.resetPasswordExpires = undefined;

          
          user.save((err, user) => {
            if (err) return next(err);
            req.logIn(user, (err) => { 
              done(err, user);
            })
          })
        })
     },
     function(user, done) {
       let smtpTransport = nodemailer.createTransport({
         service: 'Gmail',
         auth: {
           user: config.email,
           pass: config.password
         }
       });

       let mailOptions = {
         to: 'fuhaustin@gmail.com',
         from: 'fuhaustine@gmail.com',
         subject: 'Your password has been changed', 
         text: 'Hello,\n\n' +
          `This is a confirmation that the password for your account ${user.email} has been changed.\n`
       };
       smtpTransport.sendMail(mailOptions, (err, info) => {
         if(err) {
           if(err.errno) {
             return res.status(httpStatus.SERVICE_UNAVAILABLE).json(err);
           }

           return res.status(httpStatus.UNAUTHORIZED).json(err);
         }
         res.json({info: 'Message deliverd'});
       });
     }
   ], function(err){
     res.json(err);
   });
 }








/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function loginJwt(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity
  if (req.body.username === user.username && req.body.password === user.password) {
    const token = jwt.sign({
      username: user.username
    }, config.jwtSecret);
    return res.json({
      token,
      username:user.username
    });
  };

  const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  return next(err);
}
/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  // console.log(req.user);
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

export default { login, loginJwt, logout, reset, resetPassword, forgotPassword, getRandomNumber };
