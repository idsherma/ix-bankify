const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const chalk = require('chalk');
const passport = require('passport');

const users = require('./routes/api/users');

//chalk colors
const error = chalk.bold.red;
const success = chalk.bold.greenBright;
const msg = chalk.bold.blueBright;

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log(success("MongoDB successfully connected!")))
  .catch(err => console.log(error(`ERROR!:`, err)));

//Passport Middleware
app.use(passport.initialize());

//Passport config
require('./config/passport')(passport);

//routes
app.use('/api/users', users);

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(msg(`Server up and running on port: ${port}!`)));

