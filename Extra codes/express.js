var express=require('express');
var app=express();

app.get('/hello',function(req,res){
    console.log(req.query.name);
    res.send("<h1>HELLO!</h1>");
    });
    
app.get('/test.html',function(req,res){
res.sendFile(__dirname+"/test.html")
});
app.get('/main.css',function(req,res){
    res.sendFile(__dirname+"/main.css")
    });
    app.get('/main.js',function(req,res){
        res.sendFile(__dirname+"/main.js")
        });
        app.get('/pic_bulboff.gif',function(req,res){
            res.sendFile(__dirname+"/pic_bulboff.gif")
            });
            app.get('/pic_bulbon.gif',function(req,res){
                res.sendFile(__dirname+"/pic_bulbon.gif")
                });
            
    app.get('/demo.html',function(req,res){
    res.sendFile(__dirname+"/demo.html")    
});
var server=app.listen(3000,function(){
    console.log("host"+server.address().port);
});