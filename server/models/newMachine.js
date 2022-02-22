const mongoose = require("mongoose");

const newMachine = mongoose.Schema(
	{
		name: String,
		image: Array,
		discription: String,
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("NewMachine", newMachine);
