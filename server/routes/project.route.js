import express from 'express'
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import projectCtrl from '../controllers/project.controller';

const router = express.Router();

router.route('/')
  /** GET /api/posts - Get list of posts */
  .get(projectCtrl.list)

  /** POST /api/posts - Create a new project */
  .post(validate(paramValidation.createProject), projectCtrl.create);



router.route('/:projectId')

  /** GET /api/projects/:projectId - Get project */
  .get(projectCtrl.get)

  /** PUT /api/projects/:projectId - Update project */
  .put(validate(paramValidation.updateProject), projectCtrl.update)

  /** DELETE /api/projects/:projectId - Delete project */
  .delete(projectCtrl.remove);

router.param('projectId', projectCtrl.load);

router.route('/:projectId/participants/:projectIDnumber')
  .get( (req,res,next) => {
    console.log("here");
    console.log(req.params);
    res.json(req.params)
});

// 

export default router;