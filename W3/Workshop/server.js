const app = require('express')()
//const routes = require('./')

app.listen(3000)

app.get('/about', (req, res) => {
    console.log(req.url)
    let filepath = path.resolve('./www/mypage.html')
    res.sendFile(filepath)
})

app.get('*', (req, res) => {
    res.send('Error')
})