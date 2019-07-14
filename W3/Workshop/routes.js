const express = require('express')
const app = express()

module.exports = (app, path) => {
    app.get('/mypage', (req, res) => {
        let filepath = path.resolve('./www/mypage.html')
        res.sendFile(filepath)
    })
}