const url = require('url')
const fs = require('fs')

renderHTML = (path, response) => {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            response.writeHead(404)
            response.writeHead('File not found')
        } else {
            response.write(data)
        }
        response.end()
    })
}

module.exports = {
    handleRequest: (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'})

        let path = url.parse(req.url).pathname
        if (path == '/') {
            renderHTML('./index.html', res)
        } else {
            res.writeHead(404)
            res.write('Route not defined')
            res.end()
        }
    }
}