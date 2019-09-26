module.exports = (db, app) => {
    app.post('/add', (req, res) => {
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        const collection = db.collection('products');
        collection.find({'id':product.id}).count((err,count) => {
            if (count == 0) {
                collection.insertOne(product,(err,dbres)=>{
                    if (err) throw err;
                    let num = dbres.insertedCount;
    
                    res.send({'num':num, err:null});
                })
            } else {
                res.send({'num':0,'err':'Dupe item'});
            }
        });
    });
}