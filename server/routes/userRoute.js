//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
const userController = require('../controllers/userController');
const authConstroller = require('../controllers/authController');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello Users!');
})

router.get('/:mail', userController.getUserByEmail);
router.get('/all', userController.getAllUsers);
router.post('/signup', authConstroller.signup_post);
router.post('/login', authConstroller.login_post);


module.exports = router;
