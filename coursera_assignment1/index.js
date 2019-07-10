const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app= express();
const dishRouter = require('./dishRouter');
const promoRouter = require('./promoRouter');
const leaderRouter = require('./leaderRouter');
const hostname = 'localhost';
const port = 3000;

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
app.use(express.static(__dirname+'/public'));

app.use((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<html><body><h1>this is express server</h1></body></html>')
});

const server= http.createServer(app);
app.listen(port,hostname,() =>{
    console.log("server running at http://"+hostname +":" +port);
})