
const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const io = require('socket.io');
const sockets = require('./socket.js');

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10, useNewUrlParser:true, useUnifiedTopology:true}, (err, client) => {
    if (err) {return console.log(err)}

    const dbName = 'W9Workshop';
    const db = client.db(dbName);

    sockets.connect(app, io, db);
    require('./routes/add.js')(db, app);
    require('./routes/read.js')(db, app);
    require('./routes/update.js')(db, app, ObjectID);
    require('./routes/remove.js')(db, app, ObjectID);

    require('./listen.js')(http);
})