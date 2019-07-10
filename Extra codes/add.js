var http = require('http');
var url= require('url');
http.createServer(function(req,res){
var q=url.parse(req.url,true);
var qdata=q.query;
console.log(q.pathname);
var x=parseInt(qdata.n1);
var w=parseInt(qdata.n2);
res.writeHead(200,{'Content-Type':'text/html'});

if (q.pathname=="/sum")
{
console.log(x+w);
}
else
{
console.log(x*w);
}
res.write('<h1>welcome</h1>');
res.end();

}).listen(3000,function(){
console.log("server ready!!");
});