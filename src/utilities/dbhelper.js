var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/studentDB";

var exportedObject = {};
exportedObject.ObjectID = ObjectID;

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.error(JSON.stringify(err));
    } else {
        exportedObject.db = db;
        console.log("Database connected successfully!");
    }
});

module.exports = exportedObject;