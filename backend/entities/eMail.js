const mongoose = require('mongoose')
const eMail = new mongoose.Schema({
	from: {
		type: String,
		required: true
	},
	to: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: false
	},
	date: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
})
mongoose.model("eMail", eMail) // Add model in the mongoose
