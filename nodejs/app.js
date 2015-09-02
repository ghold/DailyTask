/*

 */
require('longjohn');
var express = require('express');
var app = express();
var routes = require('./routes');
var dbConn = require('./proxy/dbConn');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConn.openDB();
app.use('/api/v1', routes());

app.listen(3000);
console.log('Listening on port 3000');
