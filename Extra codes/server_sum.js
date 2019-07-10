var http = require('http');
var url= require('url');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
var adr='http://localhost:3000/demo.htm?n1=32&n2=22';
var q=url.parse(adr,true);
var qdata=q.query;
console.log(q.pathname);
var x=parseInt(qdata.n1);
var w=parseInt(qdata.n2);
console.log(x+w);
res.write('<h1>welcome</h1>');
res.end();
}).listen(3000,function(){
console.log("server ready!!");
});