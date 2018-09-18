import Course from '../models/course.model';

/**
 * Load course and append to req.
 */
function load(req,res,next, id) {
   Course.get(id)
    .then((course) => {
     req.course = course;
    return next();
    })
    .catch( e => next(e))


   
}

/**    
 * Get course
 * @returns {Course}
 */
function get(req, res) {
   res.json(req.course);
}


/**
 * Create new course
 * @property {string} req.body.name - The name of course.
 * @property {string} req.body.courseCode - The description of course.
 * @returns {Course}
 */
function create(req, res, next) {
  const course = new Course({
    name: req.body.name,
    courseCode: req.body.courseCode
  });
  
  
  course.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
    
}
/**
 * Create new course material
 * @property {string} req.file.filename - The name of the file to store 
 */
function createMaterial(req,res,next) {

  req.course.material.push({filename:req.file.filename}); //to add field creatorId: req.user._id 


  req.course.save()
    .then(course => {
      if (course._id === req.course._id) {
        let material = req.course.material.find( (matr) => {
          return matr.filename == req.file.filename
        });
        res.json(material);
      }
    })
    .catch(e => next(e));
}

/**
 * Update existing courses
 * @property {string} req.query.name - The username of user.
 * @property {string} req.query.description - The mobileNumber of user.
 * @returns {Course}
 */
function update(req,res,next) {
  
  req.course.name = req.body.name
  req.course.courseCode = req.body.courseCode

  return req.course.save()
    .then(course => res.json(course)) 
    .catch(e => next(e)) 
}

/**
 * Get Course list
 * @property {number} req.query.skip  - Number of users to be skiped
 * @property {number} req.query.limit - Limit number of courses to be returned
 * @returns {Course[]}
 */
function list(req, res, next) {
  const { limit = 0, skip = 0 } = req.query;
   Course.list({ limit, skip })
     .then(courses => res.json(courses))
     .catch(e => next(e))
}

/**
 * Delete course
 * @param {sting} id
 * @return {Course} 
 */
function remove(req,res,next) {
  req.course.remove()
   .then((course) => res.json(course))
   .catch(e => next(e))
}

/**
 * Delete course material
 * @param {string}  req.params.materialId - The Id of the material to delete
 * @return {Course}
 */
function removeMaterial(req,res,next) {
  
  req.course.update({ "$pull": {"material":{"_id": req.params.materialId}} }, {safe: true})
   .then((data) => {
    //  console.log(data)
     res.json({isFulfilled: true, isRejected: false, info: 'Material deleted'});
   })
   .catch(e => next(e)); 
}


export default { load, get, create, update, list, remove, createMaterial, removeMaterial };
