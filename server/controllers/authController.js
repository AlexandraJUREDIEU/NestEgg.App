require('dotenv').config();
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const { generatJWT, clearTokens } = require('../services/auth.js');
const bcrypt = require('bcrypt');
const user = require('../models/user.js');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const cookieSecret = process.env.COOKIE_SECRET;

// handle errors
const handleErrors = (err) => {
    let errors = { lastNameUser: '', firstNameUser: '', emailUser: '', password: '', confirmPassword: '', newsletter: '', commercialAd: '', premium: '', connectMethod: '', budget: '' };
    console.log(err.code);
    console.log(err.message, err.code);
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    console.log(err.message);
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.signup_post = async (req, res, next) => {
    const {
        lastNameUser,
        firstNameUser,
        emailUser,
        password,
        confirmPassword,
        newsletter,
        commercialAd,
        premium,
        connectMethod,
        budgetId,
        status
    } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }
    try {
        const userExists = await User
            .findOne({ emailUser: emailUser })
            .exec();
        if (userExists) {
            const err = { message: 'User already in database', code: 11000 };
            throw err;
        }
        const user = await User.create({
            lastNameUser,
            firstNameUser,
            emailUser: emailUser,
            password,
            confirmPassword,
            newsletter,
            commercialAd,
            premium,
            connectMethod,
            budget: budgetId,
            status: status
        });
        next();
    } catch (err) {
        console.log(err);
        const err_msg = handleErrors(err);
        res.status(400).send(err_msg);
    }
};

module.exports.login_post = async (req, res, next) => {
    const { emailUser, password } = req.body;
    try {
        const user = await User.findOne({ emailUser, password }).exec();
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        req.userId = user._id;
        return next();
    } catch (error) {
        return next(error);
    }
};

module.exports.logout = async (req, res, next) => {
    try {
        await clearTokens(req, res, next);
        res.status(204);
    }
    catch (error) {
        return next(error);
    }
};

module.exports.refreshAccessToken = async (req, res, next) => {

    const { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } = process.env;

    const { signedCookies } = req;
    const { refreshToken } = signedCookies;
    if (!refreshToken) {
        return res.sendStatus(204);
    }
    try {
        const refreshTokenInDB = await user.findOne({ refreshToken });
        if (!refreshTokenInDB) {
            await clearTokens(req, res, next);
            const error = createError.Unauthorized();
            throw error;
        }
        try {
            const decodedToken = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
            const { userId } = decodedToken;
            const user = users.find(user => user.id == userId);

            if (!user) {
                await clearTokens(req, res);
                const error = createError("Invalid credentials", 401);
                throw error;
            }

            const accessToken = generateJWT(
                user.id,
                ACCESS_TOKEN_SECRET,
                ACCESS_TOKEN_LIFE
            );
            return res.status(200).json({
                user,
                accessToken,
                expiresAt: new Date(Date.now() + ms(ACCESS_TOKEN_LIFE)),
            });
        } catch (error) {
            return next(error);
        }
    } catch (error) {
        return next(error);
    }
}