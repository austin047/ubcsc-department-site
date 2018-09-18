import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Material Schema 
 */
const MaterialSchema = new mongoose.Schema({
  filename:{
    type: String,
    required: true
  },
  title: {
    type: String
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
    //User Id  for the user ( For each project return  the creator( user who created the material) )
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

/**
 * Course Schema
 */
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  courseCode: {
    type: String,
    required: true
  },
  material: {
    type: [ MaterialSchema ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  //Include this to enable pushing into array files.
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
CourseSchema.method({
});


/**
 * Statics for CourseSchema
 */
CourseSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of post.
   * @returns {Promise<Course, APIError>}
   */
  get(id) {
    return this.findById(id)
      //.populate({path: 'creatorId', select: 'email'})
      .exec()
      .then((course) => {
        if (course) {
          return course;
        }
        const err = new APIError('No such Course exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List courses in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of courses to be skipped.
   * @param {number} limit - Limit number of courses to be returned.
   * @returns {Promise<Course[]>}
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
 * Statics for MaterialSchema
 */
MaterialSchema.statics = {
  /**
   * Get material
   * @param {ObjectId} id - The objectId of material.
   * @returns {Promise<Material, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((material) => {
        if (material) {
          return material;
        }
        const err = new APIError('No such post exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List materials in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of materials to be skipped.
   * @param {number} limit - Limit number of materials to be returned.
   * @returns {Promise<Material[]>}
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
 * @typedef Course
 */
export default mongoose.model('Course', CourseSchema);
