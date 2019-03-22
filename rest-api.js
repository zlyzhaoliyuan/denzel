var express = require('express');
let bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://zly:zly@zly-mongo-tqkqg.mongodb.net/test?retryWrites=true"

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/movies/populate', function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
      var dbo = db.db("zly-db");
      dbo.collection("movies_collection"). find({}).toArray(function(err, result) { 
          len = result.length;
          var countt = {"count":len}
          res.send(countt);
          db.close();
      });
  });
  });

app.get('/movies', function (req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) =>{
    var dbo = db.db("zly-db");
    dbo.collection("movies_collection"). find({}).toArray((err, result) =>{ 
        var round_num = Math.round(Math.random()); 
        res.send(result[round_num]);
        db.close();
    });
});
});

app.get('/movie/:id',  (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) =>{
    var dbo = db.db("zly-db");
    console.log(req.params.id)
    var whereStr = {"id":req.params.id}; 
    dbo.collection("movies_collection"). find(whereStr).toArray((err, result) => { 
        res.send(result);
        db.close();
    });
});
  
 });
 
 app.get('^/movies/search',  (req, res) => {
   var score = parseInt(req.query.metascore)
   var count = parseInt(req.query.limit)
   MongoClient.connect(url, { useNewUrlParser: true }, (err, db) =>{
    var dbo = db.db("zly-db");
    var whereStr = {"metascore":{$gt: score}}; 
    dbo.collection("movies_collection"). find(whereStr).limit(count).toArray((err, result) => { 
        res.send(result);
        db.close();
    });
  });
 });

 app.post('/movies/:id',  (req, res) => {
   MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    var dbo = db.db("zly-db");
    var whereStr = {"id":req.params.id}; 
    var updateStr = {$set: { "date" : req.body.date,"review":req.body.review}};
    dbo.collection("movies_collection").updateOne(whereStr, updateStr,(err, result)=>{ 
        res.send(result);
        db.close();
    });
  });
 });
 
var server = app.listen(9292,  () => {
  var host = server.address().address
  var port = server.address().port
  console.log("server is running")
 
})