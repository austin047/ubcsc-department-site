import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import projectRoutes from './project.route';
import courseRoutes from './course.route';
import newsRoutes from './news.route';
import homeRoutes from './home.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/posts', postRoutes);

//mout project routes at /project
router.use('/projects', projectRoutes);

//mount course routes at /courses
router.use('/courses', courseRoutes);

//mount news routes at /news
router.use('/news', newsRoutes);

//mount homepage routes at /home
router.use('/home', homeRoutes);
export default router;
