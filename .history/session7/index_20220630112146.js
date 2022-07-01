const express = require("express");
const app = express();
app.use(express.json)

const { connectToDb } = require("./databases");
connectToDb();

const router = require("./routers");
app.use(router);

app.listen(3000, () => {
  console.log("app running in port 3000");
});
