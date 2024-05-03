const express = require('express');
const router = express.Router();

// Importer les fichiers de routes
const userRoute = require('./userRoute.js');
const budgetRoute = require('./budgetRoute.js');
const test = require('./test.js');

const homeController = require('../controllers/dashboardController.js');

// Définir les routes principales
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/test', test);
router.use('/budget', budgetRoute);
router.use('/users', userRoute);
router.use('/dashboard', homeController);

module.exports = router;
