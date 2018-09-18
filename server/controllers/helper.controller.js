import User from '../models/user.model';
import Course from '../models/course.model';
import httpStatus from 'http-status';
import config from '../config/config'
import { Code } from 'bson';
import { format } from 'util';

function authenticate(req,res,next) {
    if (config.env != 'test') {
        if(req.user) return next()

        res.status(httpStatus.UNAUTHORIZED).json({error: 'U must be logged in to access'});
    }
    
    next();
}

/**
 * Verify is email is already in use
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.email- The email of the user
 * @returns {User}
 */
function ensureEmailUnique(req, res, next) {
    User.findOne({"email":req.body.email})
    .exec()
    .then( user => { if(user) return res.status(httpStatus.CONFLICT).json({error: `User with email ${req.body.email} already exist`}); return  next()})
}

function ensureCourseNameAndCodeUnique(req, res, next) {
    if(config.env == 'test') return next();
    //let newName = req.body.name;
    let formatName = '';
    let formatArray = []

    //Capitlize the initials of the name and make spacing unique
    req.body.name.trim().split(' ').forEach(element => {
        formatArray.push(element[0].toUpperCase().concat('',element.substring(1)));
        formatArray.join(' ');
    });

  formatName = formatArray.join(' ');

    Course.findOne({name:formatName})
     .then( course => {
        //Return an error if req.course is null and course exist
        if (!req.course) {
            if(course) return res.status(httpStatus.NOT_ACCEPTABLE).json({error:`Course with Name ${req.body.name} already exist`});
        }
        //Retrun an error if req.course if not null and course name not same with req.course
        if (course && req.course) {
            if(req.course.name !== course.name) {
                return res.status(httpStatus.NOT_ACCEPTABLE).json({error:`Course with Name ${req.body.name} already exist`});
            }
        }
        
        //Change the value of the resquest body object field name to the formated name
        req.body.name = formatName;

       //Capitalize the first 3 initial of the course code (CSC) the followed by 3 numbers
        let formatCode = req.body.courseCode.trim().replace(/\s+/g, '').substring(0,3).toUpperCase().concat(' ', req.body.courseCode.trim().replace(/\s+/g, '').substring(3).replace(/\s+/g, '').substring(0,3));
        
        Course.findOne({courseCode:formatCode})
         .then(course => {
             //Return an error if req.course is null and course exist
             if(!req.course) {
               if(course) return res.status(httpStatus.CONFLICT).json({error:`Course with Code ${req.body.courseCode} already exist`});
             }

             //Retrun an error if req.course if not null and course code not same with req.course
             if(course && req.course) {
                 if(req.course.courseCode !== course.courseCode) {
                    return res.status(httpStatus.CONFLICT).json({error:`Course with Code ${req.body.courseCode} already exist`});
                 }
             }
             //change the value of the request body object field courseCode to the new formated courseCode string 
             req.body.courseCode = formatCode;
             return next();
         })
    })
}

export default { authenticate, ensureEmailUnique, ensureCourseNameAndCodeUnique }