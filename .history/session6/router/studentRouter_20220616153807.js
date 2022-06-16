const express = require("express");
const studentRouter = express.Router();
const { db } = require("../dblocal");

studentRouter.post("/", async (req, res) => {
  const { name, rank } = req.body;
  const respond = await db.students.insertOne({
    name:name,
    rank:rank
  });
  console.log("insert success!");
  res.json(respond);
});

module.exports = studentRouter;
