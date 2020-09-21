var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./app/config/db.config.js');

require('./app/route/book.route.js')(app);

app.listen(8080, console.log('App listening'));
