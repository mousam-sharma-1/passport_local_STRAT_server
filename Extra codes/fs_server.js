var http=require('http');
var fs=require('fs');

var reqe={js:'text/plain',png:'image/png',gif:'image/gif',html:'text/html',css:'text/css'}

http.createServer(function(req,res){
var u=req.url;
console.log("requesting:"+u);
var ex=u.split(".").pop();
console.log("Extension:"+ex);
var ctype=reqe[ex];

if(ctype){
    f='.'+u;
    var stream=fs.createReadStream(f);
    res.writeHead(200,{'content-type':ctype});
stream.pipe(res);
} 
else {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Invalid!!');
    res.end();
}
}).listen(3000,function(){
    console.log('server ready!')
});
