const userModel = require('../models/user');
const budgetModel = require('../models/budget');
const accountModel = require('../models/bankAccount');
const bankModel = require('../models/bank');

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
    const response = await budgetModel.find({"accounts.owner" : "ObjectId('" + userId + "')" });


    const listBankAccountUser = response[0].accounts.map(m=>m.idBankAccount);
    

    const listBankAccountUserWithoutObject = listBankAccountUser.map(id => id.slice(10, id.length-2))

    let finalReturn = [];
    for (account of listBankAccountUserWithoutObject){
        finalReturn.push(await accountModel.find({_id : account}));
    }


    finalReturn = finalReturn.map((item) => {
        return {...item, mabanque: finalReturn[0][0].bank.slice(10, finalReturn[0][0].bank.length-2)};
      });
    

    return res.json(finalReturn);

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