var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    var u=req.url;
    var fileName=__dirname+u;
    console.log(fileName);
    fs.readFile(fileName,function(err,data){
if(err)
{
    res.writeHead(500,{'content-type':'text/html'});
    res.end("Not found");

}else{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(data);
}
});
    }).listen(3000,function(){
        console.log("ready!!");
    });
