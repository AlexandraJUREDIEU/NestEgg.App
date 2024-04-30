const transactionModel = require('../models/transaction');

exports.getFixedCharges = async (req, res) => {
    try {
		const fixedCharges = await transactionModel.find([{transactions : req.params.fixedCharges}]);
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