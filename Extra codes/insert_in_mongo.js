var express= require('express');
var app= express();

var body_parser= require('body-parser');
var urlEncodedParser= body_parser.urlencoded({extended:false});
app.use(express.static('public'));

var MongoClient= require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var con;

MongoClient.connect(url,{useNewUrlParser:true},(err,dbcon)=>{
    if(err)
    throw err;
    console.log('connected');
    con=dbcon;

    var server=app.listen(3000,function(){
        console.log('server ready at port ::'+ server.address().port);
    })
})

app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/insert_mongo.html");
})
app.post('/dosignup',urlEncodedParser,function(req,res){
    var db=con.db('signup');
    db.collection('list').insertOne({'userName':req.body.a, mobileNO:req.body.b, 'email':req.body.c, 'password' : req.body.d}),function(err,res){
if(err)
throw err;
}
    console.log(req.body);
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>Done</h1>");
    res.end();
    
})