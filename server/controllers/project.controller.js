import Project from '../models/project.model';

/**
 * Load project and append to req.
 */
function load(req,res,next, id) {
   Project.get(id)
    .then((project) => {
     req.project = project;
    return next();
    })
    .catch( e => next(e))
}

/**    
 * Get project
 * @returns {Project}
 */
function get(req, res) {
   res.json(req.project);
}


/**
 * Create new project
 * @property {string} req.body.name - The name of project.
 * @property {string} req.body.description - The description of project.
 * @returns {Project}
 */
function create(req, res, next) {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
  });
  
  
  project.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
    
}

/**
 * Update existing projects
 * @property {string} req.query.name - The username of user.
 * @property {string} req.query.description - The mobileNumber of user.
 * @returns {Project}
 */
function update(req,res,next) {
  
  req.project.name = req.body.name
  req.project.description = req.body.description

  return req.project.save()
    .then(project => res.json(project)) 
    .catch(e => next(e)) 
}

/**
 * Get Project list
 * @property {number} req.query.skip  - Number of users to be skiped
 * @property {number} req.query.limit - Limit number of projects to be returned
 * @returns {Project[]}
 */
function list(req, res, next) {
  const { limit = 0, skip = 0 } = req.query;
   Project.list({ limit, skip })
     .then(projects => res.json(projects))
     .catch(e => next(e))
}

/**
 * Delete project
 * @param {sting} id
 * @return {Project} 
 */
function remove(req,res,next) {
  req.project.remove()
   .then((project) => res.json(project))
   .catch(e => next(e))
}


export default { load, get, create, update, list, remove };
