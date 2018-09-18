import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import bcrypt from 'bcrypt-nodejs';

const SALT_FACTOR = 10;

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase:true,
  //  match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },

  resetPasswordToken: String,
  
  resetPasswordExpires: Date
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

 //Do nothing function for use with the dcrypt module
var noop = function() {};
UserSchema.pre("save", function(done) {
	var user = this;

	if (!user.isModified("password")) {
		return done()
	}
	//Skip this logic if the password isn't moddified
	//Generate a salt for the hash and call an inner function when done
	bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
		if (err) {return done(err);}
		bcrypt.hash(user.password, salt, noop, (err, hashedPassword) => {
			//Hash the user password
			if(err) {return done(err);}
			user.password = hashedPassword;
			//Store the password and continues with the saving
			done();
		});
	});
});


/**
 * Methods
 */
UserSchema.method({
  /**
  * Check password
  * @param {String} - the guest password
  *
  */
  comparePassword(guest, done) {
    bcrypt.compare(guest, this.password, (err, match) => {
      done(err,match);
    })
  }

});

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef User
 */
const User =  mongoose.model('User', UserSchema);

module.exports = User;
