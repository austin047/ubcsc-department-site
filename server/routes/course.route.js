import express from 'express'
import validate from 'express-validation';
import helper from '../controllers/helper.controller'

import paramValidation from '../config/param-validation';
import courseCtrl from '../controllers/course.controller';
import upload from '../config/multer';





const router = express.Router();

router.route('/')
  /** GET /api/courses - Get list of course */
  .get(courseCtrl.list)

  /** POST /api/course - Create a new course */
  .post(validate(paramValidation.createCourse), helper.ensureCourseNameAndCodeUnique, courseCtrl.create);


router.route('/:courseId')

  /** GET /api/courses/:courseId - Get course */
  .get(courseCtrl.get)

  /** PUT /api/courses/:courseId - Update course */
  .put(helper.authenticate, validate(paramValidation.updateCourse), helper.ensureCourseNameAndCodeUnique, courseCtrl.update)

  /** DELETE /api/courses/:courseId - Delete course */
  .delete(courseCtrl.remove);

router.param('courseId', courseCtrl.load);

router.route('/:courseId/material')
  /** POST /api/courses/:courseId/material - Get course */
  .post(upload.single('file'), courseCtrl.createMaterial)


router.route('/:courseId/material/:materialId')
  /** DELETE /api/courses/:courseId - Delete course */
  .delete(courseCtrl.removeMaterial)
  


// 

export default router;
