const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = async () => {
  const mongoClient = new MongoClient("mongodb+srv://thanhSonNguyen:SC3hGF6Ubi5wjVH@cluster0.amdafe9.mongodb.net/?retryWrites=true&w=majority");
  await mongoClient.connect();
  console.log("Mongo connected");
  const database = mongoClient.db("Forum_Of_Dev");
  db.users = database.collection("Users");
  db.reports = database.collection("Reports");
};

module.exports = { connectToDb, db };
