const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const path = require('path')

require('./routes.js')(app, path)

//app.use(bodyParser.json())
//app.use(express.urlencoded())

app.listen(3000, '127.0.0.1', () => {
    console.log('Server has been started at localhost:3000')
})
