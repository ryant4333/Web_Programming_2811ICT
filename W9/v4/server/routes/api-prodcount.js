module.exports = (db, app) => {
    app.post('/api/checkvalidid', (req,res)=> {
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;
        const collection = db.collection('products');

        collection.find({'id':product.id}).count((err, count)=> {
            if (count == 0) {
                res.send({success:1, topnum:0});
            } else {
                //send back highest used number
                collection.find({}, {sort: {id: -1}, limit: 1}).toArray((err, items)=> {
                    res.send({success:0, topnum:items[0].id});
                });
            }
        });
    });
}

//takes a user input id, checks if its in database
//