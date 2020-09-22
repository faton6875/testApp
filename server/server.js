var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())
const db = require('./app/config/db.config.js');

require('./app/route/catalog.route.js')(app);
require('./app/route/product.route.js')(app);
app.listen(8080, console.log('App listening'));
