const config = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//monGOD stuff
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfull connected to database");
}).catch(err => {
    console.log("Could not connect to db", err);
    process.exit();
})

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Contorl-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const products = require('./operations');
app.post('/products', products.insert);
app.get('/', products.find);
app.post('/productUpdate', products.update);
app.post('/productDelete', products.delete);

app.listen(config.serverport, () => {
    console.log("Server on port: " + config.serverport);
});