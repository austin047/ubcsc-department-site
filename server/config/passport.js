const passport = require('passport'),
  User = require('../models/user.model'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local').Strategy

import config from './config';

module.exports = function() {
//serializeUser should turn a user object into an ID.
//You call done with no error and the user's ID.
passport.serializeUser(function(user,done) {
	done(null, user._id);
});
//DeserializeUser should turn the ID into a user object.
//Once you've finished, you call done with any errors and the user object

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});
};

// Setting username field to email rather than username
const localOptions = {
  usernameField: 'email'
};

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findOne({ email:email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { error: 'No user with that email!' }); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: 'Your password could not be verified. Please try again!' })}

      return done(null, user);
    });
  });
});




// Setting JWT strategy options
const jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // Telling Passport where to find the secret
  secretOrKey: config.jwtSecret

  // TO-DO: Add issuer and audience checks
};


// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload._id, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});


passport.use(jwtLogin);
passport.use('localLogin',localLogin);
