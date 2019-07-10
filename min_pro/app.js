var express = require('express');
var session = require('express-session');
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var app = express();
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('public'));
var db;
var dbcon;
mongoClient.connect(url,{useNewUrlParser:true}).then(function(con){
    dbcon = con;
    db = con.db('minor');
    console.log('Connected to DataBase');
    app.listen(3000,function(){
        console.log('Server is ready at port no 3000');
    });
}).catch(function(err){
    console.log('Error '+err);
});

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/public_pro/login.html");
});

app.get('/checkLogin',(req,res)=>{
    var mob = req.query.mobile_no;
    var pass = req.query.password;
    db.collection('t_user').findOne({"mob":mob,"pass":pass},function(err,result){
        if(result==null)
        {
            // alert('I am failed');
            console.log('I am failed');
            res.redirect('/login');
        }
        else{
            console.log('---------------------');
            console.log(result.mob);
            console.log(result.pass);
            console.log(result.name);

            req.session.user = result.name;
            req.session.admin = true;
           // alert('Login Successful');
            console.log('Login Successful');
            console.log(req.session.user);
            res.redirect('/home');
        }
        app.get("/home",function(req,res){

            res.sendFile(__dirname+"/user.html"); 
        });
        
    });
});

app.get('/logout', function (req, res) {
    req.session.destroy();
    console.log("logout success!");
    res.redirect('/login');
  });

  app.get('/content', function (req, res) {
    res.sendFile(__dirname+"/public_pro/content.html");
  });