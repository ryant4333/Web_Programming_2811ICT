module.exports = function(db,app,ObjectID){
    //Route to delete a single item
    
    app.post('/api/deleteitem',function(req,res){
      
      
        if (!req.body) {
         return res.sendStatus(400);
        }
        
        productID = req.body.productid;
        //create a new mongo Object ID from the passed in _id
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        //Delete a single item based on its unique ID.
        collection.deleteOne({_id:objectid},(err,docs)=>{
            //get a new listing of all items in the database and return to client.
          //  collection.find({}).toArray((err,data)=>{
                //console.log('data' + data);
            //   res.send(data);
          // });
            res.send({ok:1});
        })
    })
    
    }