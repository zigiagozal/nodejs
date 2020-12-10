var http = require('http');
var express = require("express")
var app=express()
var mongoose= require('mongoose')
var fs = require("fs")
var CurrentProduct = require('./usersModel')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//open the html homepage as a main coment
app.get('/', function(req, res, next){
    //res.json("kk")
    //cant read the file------------------------------
    fs.readFile("C:\\Users\\zigiagozal\\Desktop\\school\\asaf\\project\\project\\homePage.html","UTF-8",function(err, contents){
        res.json(contents);
    })
})






//open the rules of the game page
// app.get('/rulesOfTheGame', function(req, res, next){
//     res.json("the rules")
//     fs.readFile("C:\Users\zigiagozal\Desktop\school\asaf\project\project\rulesOfTheGamePage.html","UTF-8",function(err, contents){
//         res.json(contents);
//     })
// })


// app.get('/insert', function(req, res, next){
//     var p1 = {
//     firstname:"first name",
//     larstname:"last name",
//     gmail:"String",
//     nickname:"String",
//     gender:"String",
//     password:"String",
//     created: new Date()
//     };

//     var newItem = new CurrentProduct(p1)
//     newItem.save(function(err, item){
//         if(err){
//             next(err);
//         }
//         res.json({usersModel:newItem});
//     });//end of save
// });




var strConnect ="mongodb+srv://zigiagozal:vita8520@cluster0.xvfbv.mongodb.net/usersModel?retryWrites=true&w=majority"

const OPT = {useNewUrlParser:true};
mongoose.connect(strConnect, OPT);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Running om port " + port);
})