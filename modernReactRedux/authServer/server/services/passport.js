/**
 * Passport:
 *  - helps us authenticate a user when they attempt they attempt to visit
 *  	a route that requires authentication
 */

import passport from 'passport';
import User from '../models/user';
// importing our secret string
import jwtConfig from '../config/jwtConfig';
// Strategy for verifying auth request for resource access
import { Strategy as JWTStrategy, ExtractJwt as extractJwt } from 'passport-jwt';
// strategy for verifying signin with existing email/password
import LocalStrategy from 'passport-local';

// create local Strategy
const localOptions = { usernameField: 'email' }; // not using username we are using email

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify this username (in our case email) and password, call done with user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email }, (err, user) => {
    // if we don't find a user, throw an error
    if (err) {
      console.error('error: did not find a user in our search, they are not authenticated'); // eslint-disable-line no-console
      return done(err);
    }

    if (!user) { return done(null, false); }

    // compare passwords - is 'password' equal to user.password?
    return user.comparePassword(password, (isMatch) => {
      // if we don't find a user, throw an error
      if (err) {
        console.error('error: the passwords do not match'); // eslint-disable-line no-console
        return done(err);
      }
      // if passwords don't match up
      if (!isMatch) { return done(null, false); }

      return done(null, user);
    });
  });
});


// setup options for JWT Strategy for new users when signing up
const jwtOptions = {
  jwtFromRequest: extractJwt.fromHeader('authorization'),
  secretOrKey: jwtConfig.secret,
};

// create JWT Strategy for new user when signing up
const jwtLogin = new JWTStrategy(jwtOptions, (payload, done) => {
  // see if the user ID in the payload exists in our database. If it does, call
  // 'done' with that other. Otherwise, call done without a user
  User.findById(payload.sub, (err, user) => { // remember 'sub' coming from authentication.js
    // if we don't find a user, throw an error
    if (err) {
      console.error("error: don't have access to payload, cannot find user, they are not authenticated"); // eslint-disable-line no-console
      return done(err, false);
    }

    if (!user) {
      return done(null, false); // no error searching for user but we did not find a user, don't authenticate
    }

    return done(null, user); // if user exists do a callback with done
  });
});

// tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
