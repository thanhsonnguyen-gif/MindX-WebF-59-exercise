const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Student_Management";
const db = {};

async function connectToDb() {
  try {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  db.students = database.collection("student_Infor");
  } catch (error) {
    console.log(`error is ${error}`)
  }
  // return "done!";
}

module.exports = { connectToDb, db };
