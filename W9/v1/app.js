const MongoClient = require('mongod').MongoClient;
const url = 'mongodb://localhost:27017'; //Connection url
const dbName = 'myproject'; //Database Name
const colName = 'appDocs';
const client = new MongoClient(url); // Create a new mongoclient
const funOrders = require('./dbOperations/funOrders');  //sequence of db operations

//client.db(dbName)  open or start database
// db.connection(colName)  collection

client.connect(function(err) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    funOrders(client, collection);
});