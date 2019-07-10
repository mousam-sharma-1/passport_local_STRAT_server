var express=require("express");
router=express.Router();
var user=require('../model/common');

router.post('/',function(req,res){
    console.log("hello users")
    user.insert(req.body,"user",function(err,result){
        res.send(result)
    });
});
router.get('/',function(req,res){
    user.find("user",function(err,result){
        res.send(result)
    })
})
module.exports=router;