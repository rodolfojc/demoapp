var logger = require ("morgan"),
    cors = require("cors"),
    http = require("http"),
    express = require("express"),
    bodyParse = require("body-parser");

var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send("Hello World ");
});

app.listen(port, function(err){
    console.log("Listing to port " + port);
});