var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

    MongoClient.connect(url,(err,dbcon)=>{
        if(err)
        throw err;
        module.exports.insert=function(obj,col, cb){
        var db = dbcon.db("MVC");
		db.collection(col).insertOne(obj, cb);
    }
    module.exports.find=function(col, cb){
        var db = dbcon.db("MVC");
		db.collection(col).find({}).toArray(cb);
    }
})
