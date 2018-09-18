import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../config/param-validation';
import authCtrl from '../controllers/auth.controller';
import config from '../config/config';

const router = express.Router(); // eslint-disable-line new-cap


/** POST /api/auth/loginJwt - Returns token if correct username and password is provided */
router.route('/loginJwt')
  .post(validate(paramValidation.login), authCtrl.loginJwt);

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
 .post(validate(paramValidation.login), authCtrl.login);

/** GET /api/auth/logout - Redirect to the home page*/
router.route('/logout')
 .get(authCtrl.logout)

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number')
  .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

router.route('/forgot')
  .post(validate(paramValidation.forgot), authCtrl.forgotPassword);

router.route('/reset/:token')
 .get(authCtrl.reset)
 .post(validate(paramValidation.reset), authCtrl.resetPassword)

export default router;
