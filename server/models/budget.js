const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	admin: { 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User', //added by chatgpt, weird
		required: true 
	},
	typeBudget: {
		type: String,
		required: true
	},
	percentageVital: {
		type: Number,
		required: true
	},
	percentageLeisure: {
		type: Number,
		required: true
	},
	percentageSaving: { 
		type: Number, 
		required: true,
		validate: {
			validator: function() {
				return this.percentageVital + this.percentageLeisure + this.percentageSaving === 100;
			},
			message: "The sum of percentageVital, percentageLeisure, and percentageSaving must equal 100."
		}
	},
	guests: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Guest',
		required: true 
	}],
	accounts: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'Accounts',
		required: true 
	}]
});

<<<<<<< Updated upstream
module.exports = mongoose.model("Budget", budgetSchema, "Budget");
=======
module.exports = mongoose.model("Budget", userSchema, "Budget");
>>>>>>> Stashed changes
