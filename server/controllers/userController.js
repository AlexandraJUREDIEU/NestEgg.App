const userModel = require('../models/userModel');

// Define the functions that will be used in the routes
exports.getUserByEmail = async (req, res) => {
	try {
		const user = await userModel.findOne({ email: req.params.mail });
		res.json(user);
	} catch (err) {
		res.status(500).send(err);
	}
}

exports.getsDeleteUser = async (req, res) => {
	try {
		const user = await userModel
			.findOneAndDelete({ email: req.params.mail });
		res.json(user);
	}
	catch (err) {
		res.status(500).send(err);
	}
}

exports.createUser = async (req, res) => {
	try {
		const user = new userModel(req.body);
		await user.save();
		res.json(user);
	}
	catch (err) {
		res.status(500).send(err);
	}
}

exports.default = exports;