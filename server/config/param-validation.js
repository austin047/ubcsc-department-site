import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required()
    //  mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },
  // POST /api/posts
  createPost: {
    body: {
      title: Joi.string().required(),
      content: Joi.string().required()
    }
  },
  //POST /api/projects
  createProject: {
    body: {
      name: Joi.string().required(),
      description : Joi.string().required()
    }
  },

  //POST /api/courses
  createCourse: {
    body: {
      name: Joi.string().required(),
      courseCode : Joi.string().required()
    }
  },
  //POST /api/news
  createNews: {
    body: {
      title: Joi.string().required(),
      content: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      email: Joi.string().required()
      //mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // UPDATE /api/posts/:postId
  updatePost: {
    body: {
      title: Joi.string().required(),
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },
  //UPDATE /api/projects
  updateProject: {
    params: {
      projectId: Joi.string().hex().required()
    },
    body: {
      name: Joi.string().required(),
      description: Joi.string().allow().required()
    }

  },

  //UPDATE /api/courses
  updateCourse: {
    params: {
      courseId: Joi.string().hex().required()
    },
    body: {
      name: Joi.string().required(),
      courseCode: Joi.string().allow().required()
    }
  },

  //UPDATE /api/home
  updateHome: {
    body: {
      email: Joi.string().required(),
      contactNumber: Joi.number().required()
    }
  },
  updateHodMessage: {
    body: {
      hodMessage: Joi.string().required(),
    }
  },

  //UPDATE /api/news
  updateNews: {
    params: {
      newsId: Joi.string().hex().required()
    },
    body: {
      title: Joi.string().required(),
      content: Joi.string().required()
    }

  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // POST /api/auth/forgot
  forgot: {
    body: {
      email: Joi.string().required()
    }
  },

  // POST /api/auth/reset/:token
  reset: {
    params: {
      token: Joi.string().hex().required()
    },

    body: {
      password: Joi.string().required()
    }
  }
};
