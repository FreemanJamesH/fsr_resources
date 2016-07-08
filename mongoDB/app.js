var express = require('express') //loads express, a node framework
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var User = require('./User.model')
var db = 'mongodb://localhost/mongopractice'

var james = new User({
  name: 'James',
  username: 'FreemanJamesH',
  admin: true
})


mongoose.connect(db)

app.get('/', function(req, res) {
  User.find({}, function(err, users){
    if (err) throw err;
    res.json(users)
  })
})

app.get('/makeuser', function(req, res) {
  james.save(function(err) {
    if (err) throw err;
    console.log('User created!')
  }).then(function() {
    res.redirect('/')
  })
})

var port = 8080;

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
