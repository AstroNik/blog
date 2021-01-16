// Importing required modules
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', function () {
    console.log('Connected to mongodb')
})

db.on("error", function (err) {
    console.log(err);
})

// Configuring port
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use('/uploads',express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static('../client/dist/'));

// Defining route middleware
app.use('/api', require('./routes/api'));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
