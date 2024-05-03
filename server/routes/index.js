const express = require('express');
const router = express.Router();

// Importer les fichiers de routes
const userRoute = require('./userRoute.js');
const budgetRoute = require('./budgetRoute.js');
const test = require('./test.js');

// Définir les routes principales
router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.use('/test', test);
router.use('/budget', budgetRoute);
router.use('/users', userRoute);

module.exports = router;
