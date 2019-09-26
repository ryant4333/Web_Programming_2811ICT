module.exports= (db, app, ObjectID) => {
    let result;
    app.post('update', (req, res) => {

        if (!req.body) {
            return res.sendStatus(400);
        }

        product = req.body;

        let objectid = new ObjectID(product.productid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set:{name:product.name,units:product.units}},()=> {
            res.send({'ok':product.productid});
        })
    });
}