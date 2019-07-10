var express=require("express");
router=express.Router();
var product=require('../model/common');

router.post('/',function(req,res){
    console.log("hello")
    product.insert(req.body,"product",function(err,result){
        res.send(result)
    });
});
router.get('/',function(req,res){
    product.find('product',function(err,result){
        res.send(result)
    })
})
module.exports=router;
// console.log("1");