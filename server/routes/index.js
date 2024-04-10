const express = require('express');
const router = express.Router();

// Import the controllers
const userRoute = require('./userRoute');

// Define the routes
router.use('/users', userRoute);


module.exports = router;