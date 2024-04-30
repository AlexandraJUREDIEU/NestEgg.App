//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
const homeController = require ('../controllers/homeController');

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello Budgets!');
})

router.get('/:typebudget', homeController.getBudgetByUser);
router.get('/:id', homeController.getIdByUser);
router.get('/:nextcharges', homeController.getNextChargesByUser);

module.exports = router;
