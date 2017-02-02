/**
 * Created by vedapraveen on 1/30/2017.
 */
var express = require('express')
var app = express()

var MongoClient =  require('mongodb').MongoClient;
var assert = require('assert');

var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost:27017/test';


var server = app.listen(8086, function() {

    //var host = server.address().address
    //var port = server.address().port
    console.log("Listen at 8086");
});

var url = 'mongodb://localhost:27017/prac';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.close();
});

//use this is send in the query

var printUsers = function(db, callback) {
    var cursor =db.collection('users').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

//use this to call the function that puts in the query
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    printUsers(db, function() {
        db.close();
    });
});