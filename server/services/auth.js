const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

const generateJWT = (userId, secret, expirationTime) => {
	return jwt.sign(
        {
            userId,
        },
        secret,
        { expiresIn: expirationTime }
    );
}

const clearTokens = async (req, res) => {
	const { signedCookies = {} } = req;
    const { refreshToken } = signedCookies;
    if (refreshToken) {
        await userModel.deleteOne({ refreshToken });
    }
    res.clearCookie('refreshToken', {
        httpOnly: true,
        signed: true,
    });
}

module.exports = { generateJWT, clearTokens };