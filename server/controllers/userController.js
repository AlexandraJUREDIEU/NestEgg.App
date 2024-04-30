const userModel = require('../models/user');

// Define the functions that will be used in the routes
exports.getUserByEmail = async (req, res) => {
	try {
		const user = await userModel.findOne({ emailUser: req.params.mail });
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

exports.deleteUser = async (req, res) => {
	try {
		const user = await userModel
			.findOneAndDelete({ emailUser: req.params.mail });
		if (!user) {
			res.status(404).send('No item found');
		}
		res.json(user);
	}
	catch (err) {
		res.status(500).send(err);
	}
}

