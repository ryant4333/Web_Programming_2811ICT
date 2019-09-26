module.exports = (db, app) => {
    app.get('getlist',(req,res) => {
        const collection = db.collection('products');
        collection.find({}).toArray((err,data)=>{
            res.send(data);
        })
    })
}