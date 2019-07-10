var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBYkPSO8tCk1LjaZr6T45NwNhqJITclMok', // for Mapquest, OpenCage, Google Premier
  //apiKey: 'AIzaSyAnE8izq7BaeFr_HkCUyb3L99NCFM2rQRo', //Mousam
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);



app.get('/map',(req,res)=>{
    res.sendFile(__dirname+"/map.html");
})
app.post('/locmap',urlEncodedParser,(req,res)=>{
    var name = req.body.asdf;
    console.log('Hello I am in app.post')
    console.log(name);
});
app.get('/getData',(req,res)=>{
    var l = req.query.Source;
    var ln = req.query.Destinition;
    console.log(l);
    console.log(ln);
    res.redirect(__dirname+'/public/reg.html');
});

app.get('/inputMap',(req,res)=>{
    res.sendFile(__dirname+"/public/inputMap.html");
});

app.get('/getMapInput',(req,res)=>{
    var source = req.query.src;
    var destinition = req.query.dest;

    geocoder.geocode(source)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });

//   geocoder.geocode(destinition)
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
    
    res.redirect(__dirname+'/public/inputMap.html');
});



var server = app.listen(3000,()=>{
    console.log('Server is running at '+server.address().port);
});