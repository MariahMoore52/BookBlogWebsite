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

app.get("/contact",function(req,res){
    
    res.sendFile("/client/contact.html", {root : __dirname});
});
app.get("/",function(req,res){
    
    res.sendFile("/client/index.html", {root : __dirname});
});
app.get("/recommendations",function(req,res){
    
    res.sendFile("/client/reccomendations.html", {root : __dirname});
});
app.get("/current",function(req,res){
    
    res.sendFile("/client/current.html", {root : __dirname});
});

app.post("/contact",function(req,res){
    var message=req.body;
    console.log(message)
    messages.push(message)
    
    res.json(messages);

    res.json({"message" : "Posted to server!"})
    res.send('<h1 style="color: green" >Thank You, Message has been Sent.');
});
