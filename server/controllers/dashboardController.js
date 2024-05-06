const express = require('express');
const router = express.Router();
const axios = require('axios');


// Import the services
const transactionService = require('../services/transactionService.js');
const bankAccountService = require('../services/bankAccountService.js');
const budgetService = require('../services/budgetService.js');
const auth = require('../controllers/authController.js');
//const frontDashboard = require('../../src/Dashboard.jsx');

// Define the routes
router.get('/', (req, res) => {
    res.send('Hello transactions!');
})


router.get('/transactions', transactionService.getAllTransactions);
router.get('/budget', budgetService.getBudgetByUser);
router.get('/fixedCharges', bankAccountService.getFixedCharges);
router.post('/connect', auth.login_post);
router.get('/getnbrtransactions', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/dashboard/transactions');
        res.json("Il y a " + response.data[0].transactions.length + " transactions.");
    }
    catch {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//router.get('/manouvelleroute', frontDashboard.displayTest);

router.get('/manouvelleroute', async (req, res) => {
    try {
        const response = await axios.get('/transactions');
        console.log(response);
        //res.json(response.data);
    }
    catch {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/*
router.get('/example', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // Modification des données
        const modifiedData = response.data.map(item => {
            return {
                userId: item.userId,
                id: item.id,
                title: item.title.toUpperCase(), // Exemple de modification
                body: item.body
            };
        });

        res.json(modifiedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});*/

module.exports = router;
// dashboardController.js
/*exports.ttt = (req, res) => {
    res.send('ttt');
};
exports.dashboard_post = (req, res) => {
    res.send('d_p');
};*/