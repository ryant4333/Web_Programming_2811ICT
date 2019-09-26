var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectID;


exports.insert = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        let db = client.db("dbName"); // Create a Product
        let doc = req.body
            // use insertOne method with callbeck
        db.collection("colName").insertOne(doc, function(err, result) {
            console.log("Inserted the following document into the collection:");
            console.log(doc);
            res.send(doc);
            client.close();
        });

    });
};

exports.find = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        let db = client.db("dbName");
        // use the method as promise 
        db.collection("colName").find({}).toArray().then(function(docs) {
            console.log("Found the following records");
            console.log(docs);
            res.send(docs);
        }).catch((err) => { console.log(err); }).finally(() => { client.close(); });
    });
};

exports.update = function(req, res) {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        let db = client.db("dbName");
        db.collection("colName", function(err, collection) {
            let queryJSON = req.body.query;
            // queryJSON._id = new ObjectId(req.params_id);
            let updateJSON = req.body.update;
            // Update document with queryJSON, set updateJSON
            collection.updateMany(queryJSON, { $set: updateJSON }, function(err, result) {
                console.log("for the documents with", queryJSON);
                console.log("SET: ", updateJSON);
                res.send(result);
                client.close();
            });
        });
    });
};

exports.delete = function(req, res) {
    MongoClient.connect(url, function(err, client) {
        let db = client.db("dbName");
        db.collection("colName", function(err, collection) {
            let queryJSON = req.body;
            collection.deleteMany(queryJSON, function(err, result) {
                console.log("Removed the documents with: ", queryJSON);
                res.send(queryJSON);
                client.close();
            });
        });
    });
};