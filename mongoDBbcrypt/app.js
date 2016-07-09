var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt')
var mongoose = require('mongoose')
var cors = require('cors')
var db = 'mongodb://localhost/mongobcryptpractice'
var User = require('./User.model')

mongoose.connect(db)


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', function(req, res){
  console.log('get received')
})

app.post('/signup', function(req, res){
  console.log('signup received, req.body: ', req.body);

  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
    searches: []
  })

  newUser.save(function(err){
    if (err) throw err;
    console.log('user created!')
  }).then(function(){
    User.find().then(function(results){
      console.log('results from User.find(): ', results)
      res.json({data: results})
    })
  })

})

let port = 3000;
app.listen(port, function(){
  console.log('listening on ' + port)
})
