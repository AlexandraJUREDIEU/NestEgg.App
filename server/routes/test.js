const express = require('express');
const router = express.Router();

// Import the services
const transactionService = require('../services/transactionService.js');
const bankAccountService = require('../services/bankAccountService.js');
const budgetService = require('../services/budgetService.js');
const auth = require('../controllers/authController.js');
const dashboardService = require('../controllers/dashboardController.js');

// Define the routes
router.get('/', (req, res) => {
    res.send('Hello transactions!');
})

router.get('/transactions', transactionService.getAllTransactions);
router.get('/budget', budgetService.getBudgetByUser);
router.get('/fixedCharges', bankAccountService.getFixedCharges);
router.post('/connect', auth.login_post);
router.post('/r', dashboardService.ttt);

module.exports = router;