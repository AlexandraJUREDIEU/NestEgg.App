const userModel = require('../models/user');

// Define the functions that will be used in the routes
exports.getUserByEmail = async (req, res) => {
	try {
		console.log("getuserbyemail");
		const user = await userModel.findOne({ emaiUser: req.params.mail });
		if (!user) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(user);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}

exports.getsDeleteUser = async (req, res) => {
	try {
		const user = await userModel
			.findOneAndDelete({ emaiUser: req.params.mail });
		if (!user) {
			res.status(404).send('No item found');
		}
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

exports.getAllUsers = async (req, res) => {
	try {
		const users = await userModel.find();
		res.send(users);
	}
	catch (err) {
		res.status(500).send(err);
	}
}
