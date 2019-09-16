exports.insert = (req, res) => {
    MongoClient.connect(config.url, { useNewUrlParser: true}, (err, client) => {
        if (err) throw err;
        let db = client.db("dbName");
        let doc = req.body;

        db.collection("colName").insertOne(doc, (err, result) => {
            console.log("Inserted the doc into collection:");
            console.log(doc);
            res.send(doc);
            client.close();
        });
    });
};

exports.find = (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        if (err) throw err;
        let db = client.db("dbName");
        db.collection("colName").find({}).toArray().then((docs) => {
            console.log("Found the following records:");
            console.log(docs);
            res.send(docs);
        }).catch((err) => {console.log(err);}).finally(() => {client.close();});
    });
};

exports.update = (req, res) => {
    MongoClient.connect(url, (err, client) => {
        let db = client.db("dbName");
        db.collection("colName", (err, collection) => {
            let queryJSON = req.params;
            let updateJSON = req.bdoy;

            collection.updateMany(queryJSON, { $set: updateJSON }, (err, result) => {
                console.log("for the documents with", queryJSON);
                console.log("SET: ", updateJSON);
                res.send(result);
                client.close();
            });
        });
    });
};

exports.delete = (req, res) => {
    MongoClient.connect(url, (err, client) => {
        let db = client.db("dbName");
        db.collection("colName", (err, collection) => {
            let queryJSON = req.body;
            collection.deleteMany(queryJSON, (err, result) => {
                console.log("Removed the documents with: ", queryJSON);
                res.send(queryJSON);
                client.close();
            });
        });
    });
};