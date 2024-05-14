const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
	admin: {
		/*type: mongoose.Schema.Types.ObjectId,*/
		type: String,
		ref: 'User',
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
		ref: 'User',
		required: false 
	}],
	accounts: [{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'BankAccount',
		required: true 
	}],
	fixedCharges : [{
		nameCharge : {type : String, required : true},
		monthlyCharge : {type : Number, required : true},
		billingInterval : {type : Number, required : true},
		category : {type: mongoose.Schema.Types.ObjectId, ref : 'Category', required : true},
	}]
});

module.exports = mongoose.model("Budget", budgetSchema, "Budget");
