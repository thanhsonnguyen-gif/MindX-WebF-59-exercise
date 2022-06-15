const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "School_Management";

async function main() {
  await client.connect();
  const db = client.db(dbName);
  console.log("Connected successfully to server");
  const collection = db.collection("Student");
  return "done!";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
