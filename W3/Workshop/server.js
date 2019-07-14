const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//require('./routes/accountroute.js')(app, path)

app.use(bodyParser.json())
app.use(express.static(__dirname + '/www'))

app.listen(3000, '127.0.0.1', () => {
    let d = new Date()
    let n = d.getHours()
    let m = d.getMinutes()
    console.log('Server has been started at : ' + n + ':' + m)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/www/mypage.html")
})

app.post('/api/login', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }
    let customer = {}
    customer.email = req.body.email
    customer.upwd = req.body.upwd
    if (req.body.email == "abc@com.au" && req.body.upwd == "123") {
        customer.valid = true
    } else {
        customer.valid = false
    }
    res.send(customer)
})
