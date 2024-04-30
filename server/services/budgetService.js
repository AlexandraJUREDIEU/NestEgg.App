const budgetModel = require('../models/budget');

// Define the functions that will be used in the routes
exports.getBudgetByUser = async (req, res) => {
	try {
		const budget = await budgetModel.findOne({ budget: req.params.lastNameUser });
		if (!budget) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(budget);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}

/*exports.getIdByUser = async (req, res) => {
	try {
		const budget = await budgetModel.findOne({ cornichon: req.params.lastNameUser });
		if (!budget) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(budget);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}*/

/*exports.getNextChargesByUser = async (req, res) => {
	try {
	const budget = await budgetModel.findOne({ soupe: req.params.lastNameUser });
		if (!budget) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(budget);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}*/







/*exports.deleteBudget = async (req, res) => {
	try {
		const budget = await budgetModel
			.findOneAndDelete({ emailBudget: req.params.mail });
		if (!budget) {
			res.status(404).send('No item found');
		}
		res.json(budget);
	}
	catch (err) {
		res.status(500).send(err);
	}
}*/

