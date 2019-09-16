// setup =======================================================

const app = require('express')();  //Import Express
const http= require('http').Server(app);  
const bodyParser = require('body-parser');  //Instance of body-parser
const cors = require('cors');  //Allow cross origin requests
const MongoClient = require('mongodb').MongoClient; // MongoClient functionality
// let ObjectID = requite('mongodb').ObjectID;  //ObjectID functionality


// config =======================================================

app.use(cors());
app.use(bodyParser.json());  //Mounts middleware functions
app.use(express.static(path.join(__dirname, 'dist')));


const url = 'mongodb://localhost:27017';  //locally stored database

// Connect to db and listen for req =============================
MongoClient.connect(url, {
    poolsize:10,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {return console.log(err)}
    const dbName = 'v4db';
    const db = client.db(dbName);
    //require all routes
    require('./routes/api-add.js')(db, app);
    require('./routes/api-getlist')(db, app);


    app.listen()
    require('./listen.js')(http);  //Starts server listen after database connection
})