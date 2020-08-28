const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(PORT);
