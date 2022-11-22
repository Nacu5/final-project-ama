/** source/routes/posts.ts */
import express from 'express';
import postsController from '../controllers/posts';
import usersController from '../controllers/specialisti';
const router = express.Router();

router.get('/posts', postsController.getPosts);
router.get('/posts/:id', postsController.getPost);
router.put('/posts/:id', postsController.updatePost);
router.delete('/posts/:id', postsController.deletePost);
router.post('/posts', postsController.addPost);

router.get('/specialisti', usersController.getSpecialisti);

export default router;