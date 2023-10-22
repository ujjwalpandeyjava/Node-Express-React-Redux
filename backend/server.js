/*
 * Run: npm run start
 *    : npx nodemon ./server.js
 * Hot Reload run: "npx nodemon ./server.js"
 */

var cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Use .env file for system configurations.
const dotenv = require("dotenv")
dotenv.config();

var allowlist = ['http://example1.com', 'http://example2.com', "http://localhost:3000"]
var corsOptions = (req, callback) => {
  var corsOptions;
  console.log("From: ", req.header('Origin'));
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptions));

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
app.use('/contact', require('./router/contactActions'))
app.use('/eMail', require('./router/eMail'))


const hostname = "127.0.0.1";
const port = process.env.PORT || 2000;
app.listen(port, hostname, () => {
  console.log(`Server running on port: http://${hostname}:${port}/`)
});
