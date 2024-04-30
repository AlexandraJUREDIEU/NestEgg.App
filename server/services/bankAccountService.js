const budgetModel = require('../models/budget');

exports.getFixedCharges = async (req, res) => {
    try {
		const fixedCharges = await budgetModel.find({}, {fixedCharges: 1});
		if (!fixedCharges) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(fixedCharges);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}