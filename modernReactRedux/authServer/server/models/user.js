import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;

// define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// on save hook, encrypt password
// before saving a model, run this function
// keep in mind we have to use es5 here as arrow functions won't work properly
// here do to context/scope
userSchema.pre('save', function(next) { // eslint-disable-line
  // get access to the user model by setting the context to the user model
  const user = this; // user.email, user.password

  // generate a salt, then run a callback, first argument is number of rounds to hash
  bcrypt.genSalt(10, function(err, salt) { // eslint-disable-line
    if (err) {
      console.error('error: bcrypt could not create salt'); // eslint-disable-line
      next(err);
    }

    // after salt has been created, hash (aka encrypt) our password using the salt,
    // then run a callback with a hash
    bcrypt.hash(user.password, salt, null, function(err, encrypt) { // eslint-disable-line
      if (err) {
        console.error('error: bcrypt not hashing password'); // eslint-disable-line no-console
        next(err);
      }

      // overwrite plain text password with encrypted password
      user.password = encrypt;
      // final step call next and save password
      next();
    });
  });
});

// adding a method object to our user model, basically says when ever create a user object its
// going to have access to any functions that we define on this method property
userSchema.methods.comparePassword = function(candidatePassword, cb) { // eslint-disable-line
  // bcrypt behind the scenes is taking care of comparing passwords, its taking the
  // salt + hash password, its going to internally doing the hashing process on the
  // candidatePassword and than decide are these things two things equal, if they
  // are equal isMatch will be true
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) { // eslint-disable-line
    if (err) {
      console.error('error: there was an error with the password comparison'); // eslint-disable-line
      return cb(err);
    }

    cb(null, isMatch);
  });
};


// create the model class
// loads schema into mongoDB and corresponds to a collection 'user'
export default mongoose.model('user', userSchema);

// or could do this instead
// const modelClass = mongoose.model('user', userSchema);
// or could do this instead
// export the model
// export default modelClass;
