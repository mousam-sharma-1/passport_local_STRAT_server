var http=require('http');
http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});

res.write('<h1>Sucessfull!!</h1>');
res.write('<p>you did it</p>');
res.end();
}).listen(3000,function(){
    console.log("ready!!");
});
