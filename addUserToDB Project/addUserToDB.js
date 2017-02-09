/**
 * Created by vedapraveen on 2/7/2017.
 */
/**
 * Created by vedapraveen on 2/7/2017.
 */
var express = require('express')
var app = express();

var MongoClient =  require('mongodb').MongoClient;

//connect to MongoDB

var addUserToDB = app.get('/addUserToDB',function(req,res){

    firstname = req.query.firstname;
    console.log(firstname)
    res.send("Here it is: " + firstname);
})

//MongoClient.connect("mongodb://localhost:27017/prac", function (err, db){
//
//    if(err){ return console.dir(err);} // if the db doesnt exist error out
//
//    var collection = db.collection('users');
//
//})

//module.exports = addUserToDB;

module.exports = app;