const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Student_Management";

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  const inforCollection = database.collection("student_Infor");
  return "done!";
}

module.exports = connectToDb;
