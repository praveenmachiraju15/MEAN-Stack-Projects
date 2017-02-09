/**
 * Created by vedapraveen on 2/7/2017.
 */
/**
 * Created by vedapraveen on 2/7/2017.
 */
var express = require('express')
var app = express();

var MongoClient =  require('mongodb').MongoClient;



 app.get('/addUserToDB',function(req,res){ //If I recieve a get call for '/addUserToDB' then do the following...

     firstname = req.query.firstname; //get the 'firstname' field frm the webpage by req.query. and then set it to a variable
     lastname = req.query.lastname;
     email = req.query.email;
     username = req.query.username;
     password = req.query.password;
     var doc1 = { //create an object and call it doc1 [you will insert this into MongoDB]

       'firstname': firstname, //key-pair values
        'lastname': lastname,
        'email': email,
        'username': username,
        'password': password

    };

    console.log(firstname,lastname,email,username,password);

    res.send("Here it is: " + firstname);
     MongoClient.connect("mongodb://localhost:27017/prac", function (err, db){ //MongoClient connect to MongoDB and 'prac' DB

         if(err){ return console.dir(err);} // if the db doesnt exist error out

         var collection = db.collection('users');//go into 'users' collection inside 'prac' database


         collection.insert(doc1);//and insert doc1

     })
})

//connect to MongoDB


//module.exports = addUserToDB;

module.exports = app;