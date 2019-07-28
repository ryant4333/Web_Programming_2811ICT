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

let user_list = {"users": [{"email":"RyanCTaylor95@gmail.com", "upwd":"1234"}, {"email":"abc@com.au", "upwd":"123"}]}

app.post('/api/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {}
    customer.email = req.body.email
    customer.upwd = req.body.upwd
    for (i in user_list.users){
        if(user_list.users[i].email == req.body.email && user_list.users[i].upwd == req.body.upwd) {
            customer.valid=true
        }
    }
    if (!customer) {
        customer.valid=false
    }
    res.send(customer)
})