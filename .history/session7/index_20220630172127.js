const { urlencoded } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const { connectToDb } = require("./databases");
connectToDb();

const router = require("./routers");
app.use(router);
app.use("/assets", express.static("assets"));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("app running in port 3000");
});
