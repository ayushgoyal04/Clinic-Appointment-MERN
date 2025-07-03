// Routes: /api/posts/
const express = require('express');
const router = express.Router();
// const postController = require('../controllers/postController');


// Example for protected post routes:
// const { protect, allowRoles } = require('../auth/rbac');
// router.get('/', protect, postController.getPosts);
// router.post('/', protect, allowRoles('admin'), postController.createPost);
// router.put('/:id', protect, allowRoles('admin'), postController.updatePost);
// router.delete('/:id', protect, allowRoles('admin'), postController.deletePost);

module.exports = router;
