const routes = require('express').Router()


routes.get('/', (req, res) => {
    res.sendFile('/www/mypage.html')
})

module.exports = routes