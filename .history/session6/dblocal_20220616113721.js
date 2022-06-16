const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Student_Management";
const db = {};

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  db.students = database.collection("student_Infor");
  return "done!";
}

module.exports = { connectToDb, db };
