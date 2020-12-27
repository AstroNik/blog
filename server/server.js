// Importing required modules
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();


// Configuring port
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
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
