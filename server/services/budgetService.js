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


