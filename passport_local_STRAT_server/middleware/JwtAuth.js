var jwt = require('jsonwebtoken');

module.exports= (req,res,next) => {
    try{
        console.log("AUTH  :: ",req.headers.authorization);
        // console.log("AUTH res  :: ",JSON.stringify(req.headers['Authorization']));
        
const decode = jwt.verify(req.headers.authorization,'shhhhh');
req.userData=decode;
console.log("req.userData : ",req.userData)
next();
    }catch(err){
        res.send({status: 400, message: 'No TOKEN'});
    }
  
}