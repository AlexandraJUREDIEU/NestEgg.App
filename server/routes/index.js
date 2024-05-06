const express = require('express');
const router = express.Router();

// Importer les fichiers de routes
const userRoute = require('./userRoute.js');
// const budgetRoute = require('./budgetRoute.js');
const auth = require('./auth.js');

router.get('/', (req, res) => {
	res.send('Welcome to the API');
});

// router.use('/budget', budgetRoute);
router.use('/users', userRoute);
router.use('/auth', auth.router);

module.exports = router;
