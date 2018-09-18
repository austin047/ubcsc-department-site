import express from 'express'
import validate from 'express-validation';

import paramValidation from '../config/param-validation';
import homeCtrl from '../controllers/home.controller';
import upload from '../config/multer';





const router = express.Router();

router.use( (req,res,next) => {
  homeCtrl.load(req,res,next)
})

router.route('/')
  /** GET /api/home - Get home object */
  .get(homeCtrl.get)

  /** PUT /api/home/:courseId - Update home */
  .put(validate(paramValidation.updateHome), homeCtrl.update);


router.route('/pictures')
/** POST /api/home/pictures - Get home */
  .post( upload.single('file'), homeCtrl.createPicture)

router.route('/pictures/:pictureId')

  /** DELETE /api/home/:courseId - Delete home */
  .delete(homeCtrl.removePicture);

router.route('/hodmessage')

  /** DELETE /api/home/:courseId - Delete home */
  .put(validate(paramValidation.updateHodMessage), homeCtrl.updateHodMessage);




//

export default router;
