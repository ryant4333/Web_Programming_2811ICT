const http = require('http')
const routes = require('./routes.js')

http.createServer(routes.handleRequest).listen(3000)