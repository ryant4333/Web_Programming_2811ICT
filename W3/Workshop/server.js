const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

require('./routes.js')(app, path)

app.use(bodyParser.json())

app.use(express.static(__dirname + '/www'))

//app.use(express.urlencoded())

app.listen(3000, '127.0.0.1', () => {
    console.log('Server has been started at localhost:3000')
})

app.post('/api/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {}
    customer.email = req.body.email
    customer.upwd = req.body.upwd
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true
    } else {
        customer.valid = false
    }
    res.send(customer)
})