var express = require("express");

var app=express();

app.get('/',function(req, res, next){

res.json({FirstMessage:"hello world 2"});

});



var port = process.env.PORT || 3000;

app.listen(port, function(){

console.log("Running on port " + port);

});