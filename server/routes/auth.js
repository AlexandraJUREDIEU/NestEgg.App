const express =  require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

router.post('/signup',
	authController.signup_post,
	authMiddleware.generateAuthToken
);

router.post('/login',
	authController.login_post,
	authMiddleware.generateAuthToken
);

router.post('/logout',
	authMiddleware.isAuthenticated,
	authController.logout
);

router.post('/refresh', 
	authController.refreshAccessToken
);

exports.router = router;