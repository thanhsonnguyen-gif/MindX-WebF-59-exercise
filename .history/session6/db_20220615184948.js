const { required } = require("nodemon/lib/config");

const { MongoClient } = required("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "School_Management";
const db = {};

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  db.students = database.collection("Student");
  return "done!";
}

module.exports = { connectToDb, db };
