import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';


/**
 * Project Schema
 */
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
},
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project' 
    //User Id  for the participants ( For each project return an array of participants )
  }]
  
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
ProjectSchema.method({
});

/**
 * Statics
 */
ProjectSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of post.
   * @returns {Promise<Project, APIError>}
   */
  get(id) {
    return this.findById(id)
      .populate({path: 'participants', select: 'name description'})
      .exec()
      .then((project) => {
        if (project) {
          return project;
        }
        const err = new APIError('No project exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<project[]>}
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
 * @typedef Project
 */
export default mongoose.model('Project', ProjectSchema);
