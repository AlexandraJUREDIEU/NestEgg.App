const express = require('express');
const router = express.Router();

// Import the Routes
const userRoute = require('./userRoute.js');
const budgetRoute = require('./budgetRoute.js');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.use('/budget', budgetRoute);

router.use('/users', userRoute);

module.exports = router;
