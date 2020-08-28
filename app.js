const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { getDbConnectionString } = require('./config');

const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(getDbConnectionString());

app.listen(PORT);
