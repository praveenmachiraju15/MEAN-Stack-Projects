/**
 * Created by vedapraveen on 2/9/2017.
 */
var express = require('express')
var app = express()
var fs = require('fs')

var server = app.listen(8090,function(){

    console.log("Listening at 8090!");

})

app.get('/', function(req,res){

    res.sendFile(__dirname + "/"+ "unitConvertor.html");
})
