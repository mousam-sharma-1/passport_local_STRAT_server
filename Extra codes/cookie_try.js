var express=require('express')
var cookieParser=require('cookie-parser')
var app=express();
app.use(cookieParser());
app.get("/",function(req,res){
    res.cookie('myname','Mousam Sharma');
    var out='<h1>Welcome</h1><a href="home">Home</a>';
    res.send(out);
})

app.get("/home",function(req,res){
    console.log(req.cookies);
    var data;
    if(req.cookies.myname){
        var n=req.cookies.myname;
        data='Hello '+n+'<p><a href="logout">Clear Cookie</a>';
    }else{
        data ='Not Accessible';
    }
    res.send(data);
})


app.get("/logout",function(req,res){
    res.clearCookie('myname');
    var out='<h1>Cookie Removed</h1><a href="home">Home</a>';
    res.send(out);
})


var server=app.listen(3000,function(){
    console.log("server port : "+server.address().port)
})