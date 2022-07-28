const mongoService = require("mongodb");
const db = {};

const connectToDb = async () => {
  const mongoClient = new mongoService.MongoClient("mongodb://localhost:27017");
  await mongoClient.connect();
  console.log("mongo connected!");
  const database = mongoClient.db("Aggregation_Management");
  db.Orders = database.collection("Order");
  db.Inventories = database.collection("Inventory");
  db.Users = database.collection("Users");
};

module.exports= {connectToDb, db}