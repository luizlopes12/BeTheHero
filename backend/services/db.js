const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database connect
const dbName = '';
var _db;
const connectToDB = (callback) =>{
    client.connect((err)=>{
        console.log('connected')
        _db = client.db(dbName)
        callback(err)
    })
}