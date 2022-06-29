const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Student_Management"; 
// const dbName = "Aggregation_Management"; //disconnect to db by ctrl + /
const db = {};

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  db.students = database.collection("student_Infor");
  // db.persons = database.collection("Persons"); //disconnect to db by ctrl + /

  return "done!";
}

module.exports = { connectToDb, db };
