const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middlewares/auth.js');

router.get('/dashboard/transactions', authMiddleware.isAuthenticated, dashboardController.dashboardData);


exports.router = router;
