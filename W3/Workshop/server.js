const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

require('./routes.js')(app, path)

app.use(bodyParser.json())
//app.use(express.urlencoded())

let users = [
    {"email":"ryant4333@hotmail.com", "upwd":"1234"},
    {"email":"RyanCTaylor95@gmail.com", "upwd":"1234"},
    {"email":"ryan.taylor5@griffithuni.edu.au", "upwd": "1234"}
]

app.use(express.static(__dirname + '/www'))

app.listen(3000, '127.0.0.1', () => {
    console.log('Server has been started at localhost:3000')
    for (i in users) {
        console.log(users[i])
    }
})
/*
app.post('/api/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let customer = {}
    customer.email = req.body.email
    customer.upwd = req.body.upwd
    for i in users.logins
    if (req.body.email == "abc@com.au" && req.body)
})*/