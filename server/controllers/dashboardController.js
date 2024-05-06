
// Import the services
const transactionService = require('../services/transactionService.js');
const bankAccountService = require('../services/bankAccountService.js');
const budgetService = require('../services/budgetService.js');


module.exports.dashboardData = async (req, res) => {
    console.log(req.body)
    try {
        const data={}
        const transactions = await transactionService.getAllTransactions();
        const budget = await budgetService.getBudgetByUser();
        const fixedCharges = await bankAccountService.getFixedCharges();
        data.transactions = transactions;
        data.budget = budget;
        data.fixedCharges = fixedCharges;
        console.log(data);
        res.status(200).json({ transactions, budget, fixedCharges });
    } catch (error) {
        res.status(500).json(error);
    }
} 


























// // Define the routes
// router.get('/', (req, res) => {
//     res.send('Hello transactions!');
// })


// router.get('/transactions', authMiddleware.isAuthenticated, transactionService.getAllTransactions);
// router.get('/budget', budgetService.getBudgetByUser);
// router.get('/fixedCharges', bankAccountService.getFixedCharges);
// router.post('/connect', auth.login_post);
// router.get('/getnbrtransactions', async (req, res) => {
//     try {
//         const response = await axios.get('http://localhost:8000/dashboard/transactions');
//         res.json("Il y a " + response.data[0].transactions.length + " transactions.");
//     }
//     catch {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// router.get('/manouvelleroute', async (req, res) => {
//     try {
//         const response = await axios.get('/transactions');
//         console.log(response);
//         //res.json(response.data);
//     }
//     catch {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });



// module.exports = router;
