import { Router } from 'express';
import passport from 'passport';
import * as Authentication from '../controllers/authentication';
import passportService from '../services/passport'; // eslint-disable-line

const router = new Router();
// any requests coming in, must pass this requireAuth step
// adding session false as we are not using cookies
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

// defining a route handler for a get request for serverside message
router.route('/').get(requireAuth, (req, res) => {
  res.send({ message: 'Super secret code is ABC123' });
});

// defining a route handler for a post request for our signup route
router.route('/signup').post(Authentication.signup);

// defining a route handler for a post request for our signin route
// 'requireSignin' will try to authenticate this user before the hit this route handler
router.route('/signin').post(requireSignin, Authentication.signin);

export default router;
