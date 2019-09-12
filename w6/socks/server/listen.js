module.exports = {
    listen: (app, PORT) => {
        app.listen(PORT, ()=>{
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            console.log("Server on port: " + PORT + " at " + h + " : " + m);

        });
    }
}