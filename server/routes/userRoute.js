//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
const userController = require('../controllers/userController');

// Define the routes
router.get('/users/:id', userController.getUser);

module.exports = router;