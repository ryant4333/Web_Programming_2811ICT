
module.exports = (app, path) => {
    app.get('/mypage', (req, res) => {
        let filepath = path.resolve('./www/mypage.html')
        res.sendFile(filepath)
    })

    app.get('/', (req, res) => {
        let filepath = path.resolve('./www/login.html')
        console.log("Connection detected")
        res.sendFile(filepath)
    })
}