const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

const { connectToDb, db } = require("./dblocal");
const studentRouter = require("./router/studentRouter");
// const personRouter = require("./router/personRouter");

app.get("/", (req, res) => {
  res.send("hello from Session6");
  // console.log(`database ${db}`);
});

app.use("/student", studentRouter);
// app.use("/person", personRouter); //disconnect to db by ctrl + /

app.listen(3000, () => {
  console.log("app running on port 3000");
  connectToDb();
});
