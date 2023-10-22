const express = require("express");
var cors = require('cors')
const router = express.Router();
const mongoose = require('mongoose')
const Contact = mongoose.model("Contacts")

//  Fetch all data
router.get("/", (req, res) => {
    console.log("Fetch all contact - params:", req.params);
    Contact.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
});

//  Insert data
router.post('/', (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        return res.status(422).json({ error: "please fill all the fields" })
    }
    const newContact = new Contact({
        name: name,
        email: email,
        phone: phone
    })

    newContact.save()
        .then(result => {
            res.json({ newSavedContact: result })
        })
        .catch(err => {
            console.log(err)
        })
})

//  Delete Contact
router.delete('/:id', (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .then(data => {
            data.remove()
            res.json({ "removedContact": data })
        })
        .catch(err => {
            console.log(err)
        })
})

//  Fetch Contact by id
router.get('/:id', (req, res) => {
    console.log("Fetch by id: ", req.params);
    Contact.findOne({ _id: req.params.id })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            console.log(err)
        })
})

//  Update Contact
router.put('/:id', (req, res) => {
    console.log("update: ", req.body);
    const { name, email, phone } = req.body
    if (!name || !email || !phone)
        return res.status(422).send("please fill all the fields")
    const Id = req.params.id;
    Contact.findByIdAndUpdate({ _id: Id }, { $set: { name: req.body.name, email: req.body.email, phone: req.body.phone } }, { new: true })
        .then(data => {
            res.json(data)
        })
        .catch(err => { console.log(err) })

})

module.exports = router