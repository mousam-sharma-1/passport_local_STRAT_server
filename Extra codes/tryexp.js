var express=require('express');
var app=express();

var body_parser=require('body-parser');
var urlEncodedParser=body_parser.urlencoded({extended:false});
app.use(express.static('m1'));

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var con;

MongoClient.connect(url,{useNewUrlParser:true},(err,dbCon)=>{
    if(err)
    throw err;
    console.log('connected');
con=dbCon;

var server=app.listen(3000,function(){
    console.log("ready!!"+server.address().port);
});

});

app.get('/reg',function(req,res){
    res.sendFile(__dirname+"/m1/reg_post.html");
});
app.post('/doreg',urlEncodedParser,function(req,res){
    var q=req.body;
    console.log(q);

    var db=con.db('db1');
    db.collection('rmp').insertOne({'name':req.body.name,'_id':req.body.userid}),
    function(err,Result){
    if(err)
    throw err;
    console.log('Result::'+Result);
    }

res.send("Done")
});