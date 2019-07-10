/*var http=require('http');
var url=require('url');
var adr='http://localhost:3000/demo.html?n=10&a=20';
http.createServer(function(req,res){
    var q=url.parse(adr,true);
    var qdata=q.query;
    console.log(q.pathname);
    console.log(qdata.n);
    var x = parseInt(qdata.n);
    console.log(qdata.a);
    var v = parseInt(qdata.a); 
    console.log(x+v+"::sum");
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>welcome</h1>');
    res.end();
}).listen(3000,function(){
console.log('server ready!!')
});*/



/*var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var qdata=q.query;
    console.log(q.pathname);
    console.log(qdata.o);
    var p = qdata.o;
    console.log(qdata.n);
    var x = parseInt(qdata.n);
    console.log(qdata.a);
    var v = parseInt(qdata.a);
    if(p=="add"){ 
    console.log(x+v+"::sum");
    }
    else{
        console.log("sorry!!")
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>_welcome_</h1>');
    res.end();
}).listen(3000,function(){
console.log('server ready!!')
});*/




var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    var q=url.parse(req.url,true);                           //  use url =>    http://localhost:3000/demo.html?n=7&a=5&o=add
    var qdata=q.query;
    console.log(q.pathname);
    var p = qdata.o;
    console.log(qdata.o);
    var x = parseInt(qdata.n);
    console.log(qdata.n);
    var v = parseInt(qdata.a);
    console.log(qdata.a);
    if(p=="add"){ 
    console.log(x+v+"::sum");
    }
    else{
        console.log("sorry!!")
    }
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<h1>_welcome_</h1>');
    res.end();
}).listen(3000,function(){
console.log('server ready!!')
});