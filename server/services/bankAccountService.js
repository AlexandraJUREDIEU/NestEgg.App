const userModel = require('../models/user');
const budgetModel = require('../models/budget');

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








/*
const budgetModel = require('../models/budget');

exports.getFixedCharges = async (req, res) => {
    try {
        const fixedCharges = await budgetModel.find({});
        
        if (!fixedCharges) {
            res.status(404).send('No item found');
        } else {
            res.json(fixedCharges);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

*/

