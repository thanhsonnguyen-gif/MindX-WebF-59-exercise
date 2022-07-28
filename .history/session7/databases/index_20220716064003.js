// const { MongoClient } = require("mongodb");

// const db = {};

// const connectToDb = async () => {
//   const mongoClient = new MongoClient("mongodb://localhost:27017");
//   await mongoClient.connect();
//   console.log("Mongo connected");
//   const database = mongoClient.db("School_Management");
//   db.users = database.collection("Users");
//   db.reports = database.collection("Reports");
// };

// module.exports = { connectToDb, db };

const {MongoClient} = require("mongodb");
const db = {};

const connectToDb = async () => {
  const mongoClient = new MongoClient("mongodb://localhost:27017");
  await mongoClient.connect();
  console.log("mongo connected!");
  const database = MongoClient.db("School_Management");
  db.users = database.collection("Users");
  db.reports = database.collection("Reports");
};

module.exports = { connectToDb, db };
