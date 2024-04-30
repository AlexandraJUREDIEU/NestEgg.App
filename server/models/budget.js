/**
 * User Budget
 * This file defines the Budget model using Mongoose.
 * The Budget model represents a Budget in the application.
 */
const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
	typeBudget: { type: String, required: true },
	percentVital: { type: Number, required: true },
	percentLeisure: { type: Number, required: true },
	percentSavings: { type: Number, required: true },
	});

module.exports = mongoose.model("Budget", budgetSchema);