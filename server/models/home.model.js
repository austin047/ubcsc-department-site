import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Picture Schema
 */
const PictureSchema = new mongoose.Schema({
  filename: {
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

/**
 * Home Schema
 */
const HomeSchema = new mongoose.Schema({
  hodMessage: {
    type: String,
    default: 'The HOD message'
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true
  },
  homePictures: {
    type : [PictureSchema]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { usePushEach: true });

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
HomeSchema.method({
});

/**
 * Statics
 */
HomeSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<Home, APIError>}
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
};

/**
 * @typedef Home
 */
export default mongoose.model('Home', HomeSchema);
