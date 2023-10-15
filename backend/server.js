/*
 * Run: npm run start
 * Hot Reload run: "npx nodemon ./server.js"
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();


// Use .env file for system configurations.
const dotenv = require("dotenv")
dotenv.config();


// Connect with DB
mongoose
  .connect(process.env.mongoURI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB connected on: " + process.env.mongoURI);
  })
  .catch(err => console.error(err));

//  Used entities models
require('./entities/contact')
require('./entities/eMail')

// Use routes
app.get("/", (req, res) => {
  res.send("Node Express server working");
});
app.use(express.json());
app.use('/contact', require('./router/crud'))
app.use('/eMail', require('./router/eMail'))


const hostname = "127.0.0.1";
const port = process.env.PORT || 2000;
app.listen(port, hostname, () => {
  console.log(`Server running on port: http://${hostname}:${port}/`)
});
