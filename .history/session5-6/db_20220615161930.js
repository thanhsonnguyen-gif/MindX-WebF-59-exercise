const { required } = require("nodemon/lib/config");

const {  MongoClient } = required('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = "School_Management";

const db ={};

async function connectToDb(){
    await client.connect();
    console.log("connect success!");
    const db = client.db(dbName);
    const collection = db.collection('Class')
    return('done!')
}

module.exports = connectToDb;