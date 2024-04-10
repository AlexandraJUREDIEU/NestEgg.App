//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
const userController = require('../controllers/userController');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello Users!');
})

router.get('/:mail', userController.getUserByEmail);

module.exports = router;