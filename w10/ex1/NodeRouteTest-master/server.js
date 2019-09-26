// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const products = require('./dbOperations/operations');
app.post('/productInsert', products.insert);
app.get('/productFind', products.find);
app.put('/productUpdate', products.update);
app.delete('/productDelete', products.delete);

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app; // this export is for test