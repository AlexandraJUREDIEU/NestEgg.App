/**
 * User Model
 * This file defines the User model using Mongoose.
 * The User model represents a user in the application.
 */
const mongoose = require("mongoose");
const budget =  require("./budget");

const userSchema = new mongoose.Schema({
	lastNameUser: { type: String, required: true },
	firstNameUser: { type: String, required: true },
	emaiUser: { type: String, required: true },
	password: { type: String, required: true },
	confirmPassword: { type: String, required: true },
	newsletter: { type: Boolean, required: true },
	commercialAd: { type: Boolean, required: true },
	premium: { type: String, required: true },
	connectMethod: { type: String, required: true },
	budget: { type: mongoose.Schema.Types.ObjectId, ref: 'Budget', required: false },
});

module.exports = mongoose.model("User", userSchema);