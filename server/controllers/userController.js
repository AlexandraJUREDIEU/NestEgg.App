const userModel = require('../models/user');

exports.getUsersList = async (req, res) => {
	try {
		const usersList = await userModel.find({}).exec();
		if (!usersList) 
			{
				res.status(404).send('No item found');
			}
		else 
		{
			const list = usersList.map(user => {
				return {id: user._id, name: user.firstNameUser, lastname: user.lastNameUser, email: user.emailUser};
		})
			res.json(list);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}

module.exports.getAuthenticatedUser = async (req, res) => {
	try {
		const user = await userModel.findById(req.user.id).exec();
		if (!user) {
			res.status(404).send('No item found');
		}
		else {
			res.json(user);
		}
	}
	catch (err) {
		console.error(err);
		res.status(500).send
	}
}

module.exports.getUserById = async (req, res) => {
	try {
		const user = await userModel.findById(req.params.id).exec();
		if (!user) {
			res.status(404).send('No item found');
		}
		else {
			res.json(user);
		}
	}
	catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
}
