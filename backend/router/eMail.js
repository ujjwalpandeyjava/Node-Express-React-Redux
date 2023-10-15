// Not using
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const eMailModel = mongoose.model("eMail")

//  Fetch all
router.get("/", (req, res) => {
	eMailModel.find()
		.then(data => {
			res.json({ data })
		})
		.catch(err => {
			console.log(err)
		})
});

//  Insert data
router.post('/', (req, res) => {
	const { name, email, phone } = req.body
	if (!from || !to || !date || !subject || !content) {
		return res.status(422).json({ error: "please fill all the fields" })
	}
	const newEMail = new eMailModel({
		from,
		to,
		subject,
		date,
		content,
	})

	newEMail.save()
		.then(result => {
			res.json({ result: result })
		})
		.catch(err => {
			console.log(err)
		})
})

//  Delete eMail
router.delete('/:id', (req, res) => {
	eMailModel.findOne({ _id: req.params.id })
		.then(data => {
			data.remove()
			res.json(data)
		})
		.catch(err => {
			console.log(err)
		})
})

//  Fetch eMail by id
router.get('/:id', (req, res) => {
	eMailModel.findOne({ _id: req.params.id })
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			console.log(err)
		})
})

//  Update eMail
router.put('/:id', (req, res) => {

	const { name, email, phone } = req.body
	if (!from || !to || !date || !subject || !content) {
		return res.status(422).send("please fill all the fields")
	}

	const Id = req.params.id;
	eMailModel.findByIdAndUpdate(
		{ _id: Id },
		{ $set: { name: req.body.name, email: req.body.email, phone: req.body.phone } }, { new: true }
	)
		.then(data => {
			res.json(data)
		})
		.catch(err => { console.log(err) })
})

module.exports = router