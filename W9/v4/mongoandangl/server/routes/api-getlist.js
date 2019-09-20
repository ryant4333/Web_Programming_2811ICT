module.exports = (db, app) => {
    //Route to get list of all items

    app.get('/api/getlist', (req,res) => {
        const collection = db.collection('products');
        collection.find({}).toArray((err, data) => {
            //Finds all items as {} passed
            //Returned as an array instead of db pointer
            res.send(data);
        })
    })
}