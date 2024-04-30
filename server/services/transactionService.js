const transactionModel = require('../models/transaction');

exports.getAllTransactions = async (req, res) => {
    try {
		const transactions = await transactionModel.find();
		if (!transactions) 
		{
			res.status(404).send('No item found');
		}
		else 
		{
			res.json(transactions);
		}
	} 
	catch (err) 
	{
		console.error(err);
		res.status(500).send(err);
	}
}