var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt')
var mongoose = require('mongoose')
var db = 'mongodb://localhost/mongobcryptpractice'

app.get('/', function(req, res){
  console.log('get received')
})

let port = 8080;
app.listen(port, function(){
  console.log('listening on ' + port)
})
