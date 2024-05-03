const express = require('express');
const router = express.Router();

// Import the services
const transactionService = require('../services/transactionService.js');
const bankAccountService = require('../services/bankAccountService.js');
const budgetService = require('../services/budgetService.js');
const auth = require('../controllers/authController.js');

const homeController = require('../controllers/dashboardController.js');

// Define the routes
router.get('/', (req, res) => {
    res.send('Hello transactions!');
});

router.use('/dashboard', homeController);
//router.post('/r', homeController.ttt);

module.exports = router;