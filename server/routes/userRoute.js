//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello Users!');
})

router.get('/:mail', userController.getUserByEmail);
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);

module.exports = router;
