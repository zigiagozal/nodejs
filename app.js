var http = require('http');
var express = require("express")
var app=express()
var mongoose= require('mongoose')
var fs = require("fs")
var CurrentProductUser = require('./usersModel')
var CurrentProductWord = require('./wordsModel')
var CurrentProductResult = require('./resultsModel')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//open the html homepage as a main coment
app.get('/', function(req, res, next){
    res.json("kk")
})



//creat user and save in mongodb
app.get('/CreatUser', function(req, res, next){
    var p1 = {
        id:"the id",
        firstname:"first name",
        larstname:"last name",
        gmail:"String",
        nickname:"String",
        gender:"String",
        password:"String",
        created: new Date()
    };

    var newItem = new CurrentProductUser(p1)
    newItem.save(function(err, item){
        if(err){
            next(err);
        }
        res.json({usersModel:newItem});
    });//end of save
});
//get all the users at saved in mongodb
app.get('/GetAllUsers', function(req, res, next){
    CurrentProductUser.find( {} ).then(function(data){
        res.json(data)
    },
        function(err){
            next(err);
        }
    );
});


//creat words and save in mongodb
app.get('/CreatWord', function(req, res, next){
    var p1 = {
        id:"the id",
        language:"the language",
        word:"the word",
        created: new Date()
    };

    var newItem = new CurrentProductWord(p1)
    newItem.save(function(err, item){
        if(err){
            next(err);
        }
        res.json({wordsModel:newItem});
    });//end of save
});
//get all the words at saved in mongodb
app.get('/GetAllWords', function(req, res, next){
    CurrentProductWord.find( {} ).then(function(data){
        res.json(data)
    },
        function(err){
            next(err);
        }
    );
});


//creat result and save in mongodb
app.get('/CreatResult', function(req, res, next){
    var p1 = {
        id:"the id",
        userID:"String",
        points:"String",
        created: new Date()
    };

    var newItem = new CurrentProductResult(p1)
    newItem.save(function(err, item){
        if(err){
            next(err);
        }
        res.json({resultsModel:newItem});
    });//end of save
});
//get all the results at saved in mongodb
app.get('/GetAllResults', function(req, res, next){
    CurrentProductResult.find( {} ).then(function(data){
        res.json(data)
    },
        function(err){
            next(err);
        }
    );
});

//check log in


var strConnect ="mongodb://zigiagozal:vita153001@bagrutproject-shard-00-00.6lrlj.mongodb.net:27017,bagrutproject-shard-00-01.6lrlj.mongodb.net:27017,bagrutproject-shard-00-02.6lrlj.mongodb.net:27017/usersModel?ssl=true&replicaSet=atlas-uupskj-shard-0&authSource=admin&retryWrites=true&w=majority"

const OPT = {useNewUrlParser:true};
mongoose.connect(strConnect, OPT);

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Running om port " + port);
})