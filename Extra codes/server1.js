var http = require('http');
var url= require('url');
http.createServer(function(req,res){
var q=url.parse(req.url,true);
var qdata=q.query;
console.log(q.pathname);
console.log(qdata);
res.writeHead(200,{'content-Type':'text/html'});
res.write('<h1>welcome</h1>');
res.end();
}).listen(3000,function(){
console.log("server ready!!");
});