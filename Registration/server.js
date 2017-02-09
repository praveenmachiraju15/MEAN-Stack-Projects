/**
 * Created by vedapraveen on 2/7/2017.
 */

var express = require('express')
var app =  express();
var fs = require('fs')

var addUserToDB = require('./addUserToDB')


app.get('/register.html', function(req,res){
    res.sendFile(__dirname+ "/" + "register.html");
})

var server = app.listen(8087,function(){

    console.log("Listening at 8087");
})


//app.get('/addUserToDB',function(req,res){
//
//    firstname = req.query.firstname;
//    console.log(firstname)
//})

app.get('/register.html', function(req,res){
    res.sendFile(__dirname+ "/" + "register.html");
});

app.use(addUserToDB);