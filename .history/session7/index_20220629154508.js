const express = require("express");
const { connectToDb } = require("./databases/db");

const app = express();
connectToDb();

app.listen(3000, () => {
  console.log("app running in port 3000");
});
