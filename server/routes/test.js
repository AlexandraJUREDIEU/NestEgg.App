const express = require('express');
const router = express.Router();

// Import the services
const transactionService = require('../services/transactionService.js');
const budgetService = require('../services/budgetService.js');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello transactions!');
})

router.get('/transactions', transactionService.getAllTransactions);
router.get('/budget', budgetService.getBudgetByUser);

module.exports = router;