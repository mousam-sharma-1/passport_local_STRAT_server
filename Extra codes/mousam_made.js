var express=require('express')
var app=express()
var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/"
var db;
var dbcon;
mongoClient.connect(url,{useNewUrlParser:true}).then(function(con){
    dbcon=con;
    db=con.db('mydb');
    app.listen(3000,function(){
        console.log('server:3000')
    })
}).catch(function(error){
    console.log('error'+error);
    process.exit();
})
app.get("/bmi",function(req,res){
    console.log
})