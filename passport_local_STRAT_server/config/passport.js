const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongoose =require('mongoose');
const passport=require('passport');
const User = require('../models/userModel');




module.exports= function(passport){
    passport.use(
        new LocalStrategy({ usernameField: 'email',  passwordField: 'password'},(email,password,done)=>{
            console.log("email in pass js ::",email)
            User.findOne({email:email}).then((user)=>{
                if(!user){
                return done(null,false,{message:"Email not reg.."});
                }
else{
    console.log("password in pass js ::",password)

    bcrypt.compare(password,user.password,(err,isMatch)=>{
        if(err)
        throw err;

        if(isMatch){
            return done(null,user)
        }
        else{
            return done(null,false,{message:"Incorrect email or password"});
            }
    })
}

            })
            .catch((err)=>{console.log(err)});
        })
    );

    passport.serializeUser((user,done)=>{
        // console.log(user)
        done(null,user.id);
    })
    
    passport.deserializeUser((id,done)=>{
        User.findById(id).then((user)=>{
            // console.log(user)
            done(null,user)
        })
    })


}