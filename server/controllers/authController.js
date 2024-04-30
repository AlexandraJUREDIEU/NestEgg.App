const User = require('../models/user.js');

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

module.exports.login_post = async (req, res) => {
    const { emailUser, password } = req.body;
    try {
        const user = await User.find({
            emailUser: emailUser,
            password: password,
        });
        res.status(201).json(user)
    } catch (err) {
        res.status(400).send(handleErrors(err));
    }
}