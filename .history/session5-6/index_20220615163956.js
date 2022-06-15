const { required } = require("nodemon/lib/config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ extended: true }));

const {connectToDb, db} = required("./db.js")

app.get("/", (req, res) => {
    res.send("hello from Session6");
  });
  
app.listen(3000, () => {
    console.log("app running on port 3000");
    connectToDb();
  });
