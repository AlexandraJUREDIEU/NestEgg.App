const userModel = require('../models/user');
const budgetModel = require('../models/budget');
const accountModel = require('../models/bankAccount');

exports.getFixedCharges = async (req, res) => {
    try {

        // Find the user
        const userId = req.query.userid;
		const user =  await userModel.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        const fixedCharges = await budgetModel.find({admin: "ObjectId('" + user._id + "')"});
        if (!fixedCharges) {
            return res.status(404).send('No budget found for this user');
        } else {
            return res.json(fixedCharges);
        }

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}


exports.getNameAccount = async (req, res) => {
    try {
        const userId = req.query.userid;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Trouver les comptes bancaires associés à l'utilisateur
        // const accounts = await budgetModel.find({accounts: "ObjectId('" + user._id + "')"});
        const accounts = await budgetModel.find({"accounts.owner" : "ObjectId('" + user._id + "')" });
        return res.json(accounts);
        if (!accounts || accounts.length === 0) {
            return res.status(404).send('No account found for this user');
        }

        // Trouver les noms des comptes bancaires
        const accountNames = accounts.map(account => account.nameBankAccount);
        return res.json(accountNames);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

exports.getAmountAccount = async (req, res) => {
    try {
        const userId = req.query.userid;

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Trouver les comptes bancaires associés à l'utilisateur
        const accounts = await accountModel.find({ userId: userId });
        if (!accounts || accounts.length === 0) {
            return res.status(404).send('No account found for this user');
        }

        // Montant des comptes bancaires
        const accountAmounts = accounts.map(account => ({ name: account.nameBankAccount, amount: account.amount }));
        return res.json(accountAmounts);

    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};