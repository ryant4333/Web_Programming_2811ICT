const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

require('./routes.js')(app, path)

app.use(bodyParser.json())
<<<<<<< HEAD
=======

app.use(express.static(__dirname + '/www'))

>>>>>>> 34d288d582a4819592a40e7a9593d0ad73396348
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
<<<<<<< HEAD
/*
=======

let user_list = {"users": [{"email":"RyanCTaylor95@gmail.com", "upwd":"1234"}, {"email":"abc@com.au", "upwd":"123"}]}

>>>>>>> 34d288d582a4819592a40e7a9593d0ad73396348
app.post('/api/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
<<<<<<< HEAD
    let customer = {}
    customer.email = req.body.email
    customer.upwd = req.body.upwd
    for i in users.logins
    if (req.body.email == "abc@com.au" && req.body)
})*/
=======
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
>>>>>>> 34d288d582a4819592a40e7a9593d0ad73396348
