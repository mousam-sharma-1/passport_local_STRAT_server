var http= require('http');
http.createServer(function (req,res){
console.log(req.url);
res.writeHead(200,{'content-type':'text/html'});
res.write('<h1>welcome</h1>');
res.write('<p> I am mousam</p>');
res.write('bye');
res.end();
}).listen(3000,function(){
console.log('server is ready.');
});