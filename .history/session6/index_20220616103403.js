const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:3000";
const client = new MongoClient(url);
const dbName = "School_Management";

// const { connectToDb } = required("./dblocal.js");

app.get("/", (req, res) => {
  res.send("hello from Session6");
});

async function connectToDb() {
  await client.connect();
  console.log("connect success!");
  const database = client.db(dbName);
  const studentCollection = database.collection("Student");
  return "done!";
}

app.listen(3000, () => {
  console.log("app running on port 3000");
  connectToDb();
});
