const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

//Update

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    let myquery = { username: 'Ryan'};
    let newvalues = { $set: {username: "BIGBRYAN", pwd: "password"}};
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});

//Drop

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     dbo.collection("users").drop(function(err, delOK) {
//         if (err) throw err;
//         if (delOK) console.log("Collection deleted");
//         db.close();
//     });
// });

//Delete

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     let myquery = {username: /^B/};  //all that starts with B
//     dbo.collection("users").deleteMany(myquery, function(err, obj) {
//         if (err) throw err;
//         console.log(obj.result.n + " docs deleted");
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     let myquery = {username: 'Huy'};
//     dbo.collection("users").deleteOne(myquery, function(err, obj) {
//         if (err) throw err;
//         console.log("1 doc deleted");
//         db.close();
//     });
// });

//Sort

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     let mysort = {username: -1};  //  -1 sort in descending order
//     dbo.collection("users").find().sort(mysort).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     let query = {username: /^R/};  //  /^R/ for all strs starting with R
//     dbo.collection("users").find(query).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("users").find({}, { projection: {username: 1, _id: 0}}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close();
//     })
// })

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.collection("users").findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.username);
//         db.close();
//     })
// })

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     const dbo = db.db("mydb");
//     let myobj = [
//         { username: "Ryan", pwd: "1234"},
//         { username: "Bill", pwd: "1234"},
//         { username: "Huy", pwd: "1234"}
//     ];
//     dbo.collection("users").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         console.log(res);
//         db.close();
//     });
// });



// dbo.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 doc inserted");
//     db.close();

// dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();