var express = require('express')

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'weizoom', 
    database: 'mysql'
});
conn.connect();
console.log("we're connected mysql!");
conn.end();

var mongo = require('mongoose');
mongo.connect('mongodb://mongo/local');
var db = mongo.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected mongo!");
});

var redis = require('redis');

var app = express()
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('\nwelcome to the node world')
})


app.listen(1337);