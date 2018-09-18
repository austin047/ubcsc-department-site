import express from 'express'
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import newsCtrl from '../controllers/news.controller';

const router = express.Router();

router.route('/')
  // /** GET /api/news - Get list of news */
  .get(newsCtrl.list)

  /** POST /api/news - Create new news */
  .post((validate(paramValidation.createNews), newsCtrl.create));



router.route('/:newsId')

  /** GET /api/projects/:newsId - Get news */
  .get(newsCtrl.get)

  /** PUT /api/projects/:newsId - Update news */
  .put(validate(paramValidation.updateNews), newsCtrl.update)

  /** DELETE /api/projects/:newsId - Delete news */
  .delete(newsCtrl.remove);

router.param('newsId', newsCtrl.load);

// router.route('/:newsId/participants/:projectIDnumber')
//   .get( (req,res,next) => {
//     console.log("here");
//     console.log(req.params);
//     res.json(req.params)
// });

// 

export default router;