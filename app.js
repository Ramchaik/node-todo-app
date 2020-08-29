const express = require('express');
const app = express();

const mongoose = require('mongoose');
const { getDbConnectionString } = require('./config');

const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const PORT = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public/dist/node-todo'));

app.set('view engine', 'ejs');

mongoose.connect(getDbConnectionString());

setupController(app);
apiController(app);

app.listen(PORT);
