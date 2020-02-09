var express = require('express');

var myservices = require('./server')();

var app = express();
app.use(express.json())


app.get('/balones', function (req, res) {
  console.log("entrando en metodo de getbalones");
  getBalones(function (docs) {
    res.send(JSON.stringify(docs));
  });
});