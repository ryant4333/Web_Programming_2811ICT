module.exports = (db,app, ObjectID) => {
    app.post('/removeitem',(req,res) => {
        if (!req.body) {
            return res.sendStatus(400);
        }

        productID = req.body.productid;

        let objectid = new ObjectID(productID);
        const collection = db.collection('products');

        collection.deleteOne({_id:objectid}, (err,docs) => {
            res.send({ok:1});
        })
    })
}