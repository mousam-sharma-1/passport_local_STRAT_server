var express=require('express');
var app=express();

app.use(express.static('public'));

var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var con;
var db;
var dbCon;
mongoClient.connect(url,{ useNewUrlParser: true }).then(function(con){
    dbCon=con;
    db=con.db('minor');    
})
var body_parser=require('body-parser');
//var urlEncodedParser=body_parser.urlencoded({extended:false});
var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var qdata;
    var q;
});

app.get("/reg",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});
app.get("/doreg",function(req,res){ 
    var q=url.parse(req.url,true);                          
    
    var qdata=q.query; 
  
console.log(qdata.user_id);
    console.log("password =>"+qdata.password);

    db.collection('t_user').insertOne({'password':qdata.password,'id':qdata.user_id}),
    function(err,Result){
    if(err)
    throw err;
}
    res.redirect("/reg");
});

var server=app.listen(3000,function(){
    console.log("host"+server.address().port);
});
