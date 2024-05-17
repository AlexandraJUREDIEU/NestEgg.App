/**
 * User bankAccount
 * This file defines the bankAccount model using Mongoose.
 * The bankAccount model represents a bankAccount in the application.
 */
const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
	nameBankAccount: { type: String, required: true },
	typeAccount: { type: String, required: true },
	amount: { type: Number, required: true },
	bank: { type: String, ref: "Bank", required: true },
	});

module.exports = mongoose.model("BankAccount", bankAccountSchema, "BankAccount");