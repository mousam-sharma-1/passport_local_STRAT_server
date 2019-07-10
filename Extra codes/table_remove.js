var express=require('express')
//var ejs=require('ejs');

var body_parser=require('body-parser');
var urlEncodedParser=body_parser.urlencoded({extended:false});

var mongodb=require('mongodb');
var mongoClient=require('mongodb').MongoClient
var url="mongodb://localhost:27017";

var app=express();
//app.set('view engine','ejs');
var db;
var dbCon;
mongoClient.connect(url,{ useNewUrlParser: true }).then(function(con){
    dbCon=con;
    db=con.db('mydb');    
app.listen(3000,function(){
        console.log("Server :3000");
    })
}).catch(function(error){
    console.log("Error :"+error);
    process.exit();
})
app.get("/req",function(req,res){

    res.sendFile(__dirname+"/Enter.html"); 
});
app.post("/doreg",urlEncodedParser, function(req,res){
    var q=req.body;
    console.log("Print info of item Added:: ");
    console.log(q);

    db.collection('product').insertOne({'name':req.body.f_name,'qty':req.body.qty,'price':req.body.price}),
    function(err,Result){
    if(err)
    throw err;
    console.log("Result:: "+Result);
 
}
res.redirect("/");
})   
app.get("/",function(req,res){
    
    db.collection('product').find().toArray(function(err,data){
        res.render('show_all',{'name':'MOUSAM','data':data});
    });    
})

app.get("/remove/:id",function(req,res){
    var id=req.params.id;
    console.log("Removing id : "+id);
    db.collection('product').deleteOne({_id: new mongodb.ObjectID(id)},function(err,result){
        if(err)
            console.log("Remove Error :"+err);         

        res.redirect("/");
    });
})
app.get("/update/:id",function(req,res){
    var id= req.params.id;
console.log("id to be updated:: "+id);

db.collection('product').findOne({'_id':new mongodb.ObjectID(id)},function(err,data){

    res.render('show_up',{'p':data}); 
})
    
})

    app.post("/doupdate",urlEncodedParser, function(req,res){
       var post_d={'id':req.body.aid,'name':req.body.aname,'price':req.body.aprice,'qty':req.body.aqty};
   
       var id = post_d.id;
    

           db.collection('product').updateOne({'_id': new mongodb.ObjectID(id)},{$set:{'name':post_d.name,'price':post_d.price,'qty':post_d.qty}},function(err,result){
        if(err)
        console.log("update Error :"+err);         

        res.redirect("/");
    });
    });


process.on('SIGINT', function () {
    console.log('About to exit.');
    dbCon.close();
    process.exit();
  });