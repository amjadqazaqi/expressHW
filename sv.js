

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var firebase = require('firebase');
//var mydata =  require('./mydb.json');

//var fs = require('fs');
//var data = fs.readFileSync('mydb.json')
//var resul1 = JSON.parse(data);





var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//var seed = require('./mydb.json');


var config = {
  apiKey: "AIzaSyCiwN74g0sM9PGHXXsdJLFWyoY-tCgVDXE",
  authDomain: "expressjs1122.firebaseapp.com",
  databaseURL: "https://expressjs1122.firebaseio.com",
  projectId: "expressjs1122",
  storageBucket: "expressjs1122.appspot.com",
  messagingSenderId: "953971784934"
};

var app2 = firebase.initializeApp(config);






app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/Survey", function (req, res) {
    res.sendFile(path.join(__dirname, "Survey.html"));
});

app.get('/api/friends', function (req, res) {
    res.sendFile(path.join(__dirname + '/mydb.json'));
    console.log(res)
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newnew = req.body;
    
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
   app2.database().ref().push(newnew)
   
   app2.ref.on("child_changed", function(snapshot) {
    var changedPost = snapshot.val();
    console.log("The updated post title is " + changedPost.title);
  });

//console.log(myhh)

    // characters.push(newcharacter);

    //res.json(newcharacter);
});

app.post("/api/amjd", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newnew = req.body ;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(req.body);

    // characters.push(newcharacter);

    //res.json(newcharacter);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

