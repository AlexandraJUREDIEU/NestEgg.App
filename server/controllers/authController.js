const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Génération d'une clé aléatoire de 256 bits (32 octets)
const generateSecretKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
console.log('Secret key:', secretKey);

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

module.exports.signup_post = async (req, res) => {
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
        budgetId 
    } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match");
    }

    try {

    
        const userExists = await User
        .findOne({ emailUser: emailUser })
        .exec();
        if (userExists){
            const err = {message: 'User already in database', code: 11000};
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
            budget: budgetId 
        });

        res.status(201).json(user);
    } catch (err) {
        const err_msg = handleErrors(err);
        res.status(400).send(err_msg);
    }
};



// Modifiez la méthode login_post pour utiliser JWT
module.exports.login_post = async (req, res) => {
    const { emailUser, password } = req.body;
    try {
        // Vérifiez si l'utilisateur existe dans la base de données avec l'email et le mot de passe fournis
        const user = await User.findOne({ emailUser, password }).exec();
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Si l'utilisateur existe, générez un jeton JWT
        const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

        // Renvoyez le jeton JWT au client
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Middleware pour vérifier le jeton JWT
module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
    });
};