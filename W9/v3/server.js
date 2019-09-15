const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Contorl-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const products = require('./operations');
app.post('/products', products.insert);
app.get('/productFind', products.find);
app.post('/productUpdate', products.update);
app.post('/productDelete', products.delete);

app.listen(3000, () => {
    console.log("Server on port 3k");
});