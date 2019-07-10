var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
var u=req.url;
var fn=__dirname+u;
console.log(fn);
fs.readFile(fn,function(err,data){
if(err){
    res.writeHead(500,{'content-type':'text/html'});
res.end('no data!');
} 
else {
    res.writeHead(200,{'content-type':'text/html'});
    res.end(data);
}
});
}).listen(3000,function(){
    console.log('server ready!')
});
