//user routes
const express = require('express');
const router = express.Router();

// Import the controllers
/*
home controller plus tard?
const budgetController = require('../controllers/authController');
*/

// Define the routes
router.get('/', (req, res) => {
	res.send('Hello Budgets!');
})

/*router.get('/:typebudget', userController.getTypeBudgetByUser);
router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);*/

module.exports = router;
