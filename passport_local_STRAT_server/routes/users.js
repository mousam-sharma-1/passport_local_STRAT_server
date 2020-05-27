var express = require('express');
var router = express.Router();
var Users = require('../models/userModel');
var bcrypt =require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');
// var passportSetup=require('../config/passport');
require('../config/passport')(passport);


/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('hello get login');
});

router.get('/signup', function(req, res, next) {
  res.send('hello get signup');
});


router.post('/login', passport.authenticate('local', { failureRedirect: '/users/err' }),
function(req, res) {
    // Successful login
    console.log("Login successful.",req.user);
    const token = jwt.sign({ email: req.user.email }, 'shhhhh', { expiresIn: "1h" });
    res.send({status:200,data:req.user,token:token});
    // I CAN ACCESS req.user here
});


// router.post('/login',passport.authenticate('local',{
//   successRedirect:'/users/succ',
//   failureRedirect: '/users/err'
// })
// )



// router.get('/succ', function(req,res) {
//   console.log("val :",req.user);
// res.send({status:200,data:req.user});
// });

router.get('/err', function(req, res, next) {
res.send({status:400,message:'wrong'});
});



// router.post('/login',
//   passport.authenticate('local',{
//     successRedirect:'/home',
//     failureRedirect: '/users/login'
//   })
// )


router.post('/signup', function(req, res, next) {
   console.log(req.body);
  // res.send('hello post signup');
  const {name , email, password, mobile} =req.body;
  let errors=[];
  if(!name || !mobile || !email || !password){
errors.push({msg:'please fill all fields'});
  }

  if(errors.length>0){
    console.log(errors)
    // res.send(errors)
    res.send({status:400,message:errors});
  }
  else{
    // console.log("successful")
    Users.findOne({email:email}).then((user)=>{
      // console.log(user.length)
      if(user){
        console.log(user)
        res.send({status:400,message:"user already exist !!"});
      // res.send("user already exist !!")
    }
    else{
      // console.log(req.body.password)
      bcrypt.hash(req.body.password, 10, function (err, hash) {
      const newUser = new Users({
        name,
        mobile,
        email,
        password:hash
      });
      console.log(newUser);
     
      newUser.save().then((user)=>{
        console.log("USER:: ",user)
        res.send({status:200,message:"successful"});
      })
      .catch((err)=>{
        console.log(err)
      })

    })
    }

    })
    .catch((err)=>{console.log(err)})
    
  }
});

module.exports = router;
