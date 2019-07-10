var http= require('http');
var fs=require('fs');
var reqType={js:'text/plain',png:'image/png',gif:'image/gif',jpg:'image/jpg',html:'text/html',css:'text/css'}
http.createServer(function(req,res){
    console.log("HTTP method=>"+req.method);
    var u=req.url;
    console.log("requesting::"+u);
var e=u.split(".").pop();
console.log("extension::"+e);
var  ctype=reqType[e];
if(ctype){
    f='.'+u;
    var stream=fs.createReadStream(f);
    res.writeHead(200,{"content-type":ctype});
    stream.pipe(res);
}
else{
    res.writeHead(500,{"content-Type":"text/html"});
    res.write("INVALID")
    res.end();
}
}).listen(3000,function(){
    console.log("READy!")
}) 