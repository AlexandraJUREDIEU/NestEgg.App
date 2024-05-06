//user routes
const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/auth');

const userController = require('../controllers/userController');

router.get('/list', userController.getUsersList);
router.get('/me', isAuthenticated, userController.getAuthenticatedUser);
router.get('/:id', isAuthenticated, userController.getUserById);

module.exports = router;
