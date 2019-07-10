var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var NodeGeocoder = require('node-geocoder');

var urlEncodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('public'));

 var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyB4BwjFDbXchO3M2xQM50RlLtpPz2oLx-o', //Master Key
  formatter: null         // 'gpx', 'string', ...
};
 var geocoder = NodeGeocoder(options);

 app.get('/inputMap',(req,res)=>{
    res.sendFile(__dirname+"/public/inputMap.html");
});

app.get('/getData',(req,res)=>{
    var source = req.query.Source;
    var destinition = req.query.Destinition;

    geocoder.geocode(source)
  .then(function(res) {
    console.log('Source formattedAddress :- '+res[0].formattedAddress);
    console.log('Source latitude :- '+res[0].latitude);
    console.log('Source longitude :- '+res[0].longitude);
  })
  .catch(function(err) {
    console.log(err);
  });

   geocoder.geocode(destinition)
  .then(function(res) {
    console.log('---------------------------------------------------');
    console.log('Destination formattedAddress :- '+res[0].formattedAddress);
    console.log('Destination latitude :- '+res[0].latitude);
    console.log('Destination longitude :- '+res[0].longitude);
  })
  .catch(function(err) {
    console.log(err);
  });
    
    res.redirect('/inputMap');
});


 var server = app.listen(3000,()=>{
    console.log('Server is running at '+server.address().port);
});