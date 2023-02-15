//Mariah Moore
//Express server

var express = require("express");
var http=require("http");
var app;
var messages = [{}]

app = express()
app.use(express.static(__dirname+"/client"));
app.use(express.urlencoded({extended:true}));
http.createServer(app).listen(8080);

app.get("/todos",function(req,res){
    console.log(messages);
    res.json(messages);
});

app.post("/todos",function(req,res){
    var message=req.body;
    console.log(message)
    messages.push(message)
    
    res.json({"message" : "Posted to server!"})
});