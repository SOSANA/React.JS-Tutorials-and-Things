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
// here do to context/scrope
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
    bcrypt.hash(user.password, salt, null, function(err, hash) { // eslint-disable-line
      if (err) {
        console.error('error: bcrypt not hashing password'); // eslint-disable-line no-console
        next(err);
      }

      // overwrite plain text password with encrypted password
      user.password = hash;
      // final step call next and save password
      next();
    });
  });
});

// create the model class
// loads schema into mongoDB and corresponds to a collection 'user'
export default mongoose.model('user', userSchema);

// or could do this instead
// const modelClass = mongoose.model('user', userSchema);
// or could do this instead
// export the model
// export default modelClass;
