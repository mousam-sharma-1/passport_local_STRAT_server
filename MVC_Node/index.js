var express=require("express");
var app=express();

var bodyparser=require("body-parser");

// app.set('view engine', 'ejs');
// app.set('views', 'views');
// app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/product',require('./controller/product'));
app.use('/user',require('./controller/user'));

app.listen(3000,function(){
	console.log("serving...");
})