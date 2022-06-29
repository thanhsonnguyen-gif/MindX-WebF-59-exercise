const {MongoClient} = require('mongodb')

const db ={}

const connectToDb = async () =>{
const mongoClient = new MongoClient('mongodb://localhost:27017')
await MongoClient.connect()
console.log('Mongo connected')
const database = mongoClient.db('School_Management')
db.students = database.collection('Students')
db.reports = database.collection('Reports')
}

module.exports = {connectToDb, db }