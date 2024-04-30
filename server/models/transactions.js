/**
 * User transactions
 * This file defines the transactions model using Mongoose.
 * The transactions model represents a transaction in the application.
 */
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
	idbudget: { type: String, required: true },
	date: { type: String, required: true },
	transactions: [{
        name : { type: String, required: true }, 
        amount : { type: Number, required: true }, 
        date : { type: String, required: true }, 
        typeBudget : { type: String, required: true }, 
        typeCategory : { type: String, required: true }, 
        idBankAccount : { type: mongoose.Schema.Types.ObjectId, ref: "BankAccount", required: true }, 
    }]
	});

module.exports = mongoose.model("Transactions", transactionSchema, "Transaction");