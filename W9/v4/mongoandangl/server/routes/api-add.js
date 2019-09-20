module.exports = (db, app) => {
    app.post('/api/add', (req,res) => {
        if (!req.body) {
            //No body in request
            return res.sendStatus(400)
        }
        product = req.body;
        const collection = db.collection('products');  //Open collection
        //Check for duplicate id
        collection.find({'id':product.id}).count((err, count)=> {
            if (count == 0) {
                //no duplicate
                collection.insertOne(product, (err, dbres) => {
                    if (err) throw err;
                    let num = dbres.insertedCount;  //Database responce
                    //Return client number of items inserted and no err message
                    res.send({'num':num, err:null});
                })
            } else {
                //duplicate, send error
                res.send({'num':0, err:"duplicate item"});
            }
        });
    });
}