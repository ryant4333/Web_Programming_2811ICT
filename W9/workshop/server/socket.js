module.exports = {

    connect: (app, io, db) => {
        let messages = [];
        io.on('connect', (socket) => {
            socket.on('updatelist', () => {
                const collection = db.collection('products');
                collection.find({}).toArray((err, data) => {
                    io.emit('newlist', data);
                });
            });

            socket.on('message', (data) => {
                if(data){
                    messages.push(data);
                }
                if (messages.length > 6) {
                    messages.shift();
                }

                io.emit('message', messages);
            });

            socket.on('prodcount', (data)=> {
                const collection = db.collection('products');
                collection.find({}).count((err, count) => {
                    io.emit('prodcount', count);
                });
            });

            socket.on('disconnect', () => {
                io.emit("disconnect");
            });
        });
    }
}