const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Student_Management";

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  const studentCollection = database.collection("Student");
  return "done!";
}

module.exports = connectToDb;
