const express = require('express');
const router = express.Router();

// Import the controllers
const userController = require('../controllers/userController');

// Define the routes
router.get('/users/:id', require('./userRoute.js'));


module.exports = router;