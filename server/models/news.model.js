import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * News Schema
 */
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
NewsSchema.method({
});

/**
 * Statics
 */
NewsSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of news.
   * @returns {Promise<News, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((news) => {
        if (news) {
          return news;
        }
        const err = new APIError('No such news exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<News[]>}
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
 * @typedef News
 */
export default mongoose.model('News', NewsSchema);
