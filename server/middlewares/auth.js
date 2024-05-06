require('dotenv').config();
const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const { generateJWT } = require('../services/auth');
const {ACCESS_TOKEN_LIFE, REFRESH_TOKEN_LIFE} = process.env;
const createError = require('http-errors');
const ms = require('ms');

module.exports.generateAuthToken = async (req, res, next) =>
	{
		try {
			const user = await userModel.findById(req.userId).exec();
			if (!user) {
				return res.status(404).send('User not found');
			}
	
		
			const refreshToken = generateJWT(
				req.userId,
				`${process.env.REFRESH_TOKEN_SECRET}`,
				REFRESH_TOKEN_LIFE
			);

			const accessToken = generateJWT(
				req.userId, 
				`${process.env.ACCESS_TOKEN_SECRET}`, 
				ACCESS_TOKEN_LIFE
			);
	
			await userModel.findOneAndUpdate({ _id: req.userId }, { refreshToken: refreshToken })
	
			res.cookie("refreshToken", refreshToken, {
				httpOnly: true,
				signed: true,
				expires: new Date(Date.now() + ms(REFRESH_TOKEN_LIFE)),
			});
	
			const expiresAt = new Date(Date.now() + ms(ACCESS_TOKEN_LIFE));
	
			return res.status(200).json({
				user,
				token: accessToken,
				expiresAt,
			});
		} catch (error) {
			return next(error);
		}
	};

module.exports.isAuthenticated = async (req, res, next) =>
	{
		try {
			const authToken = req.get('Authorization');
			const accessToken = authToken?.split('Bearer ')[1];
			if (!accessToken) {
				const error = createError.Unauthorized();
				throw error;
			}
	
			const { signedCookies = {} } = req;
	
			const { refreshToken } = signedCookies;
			if (!refreshToken) {
				const error = createError.Unauthorized();
				throw error;
			}
	
			const refreshTokenInDB = await userModel.findOne({ refreshToken: { token: refreshToken } }).exec();
	
			if (!refreshTokenInDB) {
				const error = createError.Unauthorized();
				throw error;
			}

			let decodedToken;
			try {
				decodedToken = jwt.verify(accessToken, `${process.env.ACCESS_TOKEN_SECRET}`);
			} catch (err) {
				const error = createError.Unauthorized();
				return next(error);
			}
	
			const { userId } = decodedToken;
	
			const user = userModel.find({ _id: userId }).exec();
			if (!user) {
				const error = createError.Unauthorized();
				throw error;
			}
			req.userId = user.id;
			return next();
		} catch (error) {
			return next(error);
		}
	};

