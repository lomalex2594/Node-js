require('dotenv').config()
var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send(process.env.DB_HOST);
});

app.get('/test', function (req, res) {
	res.send('pass!');
});
module.exports = app;
