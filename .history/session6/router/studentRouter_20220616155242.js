const express = require("express");
const studentRouter = express.Router();
const { db } = require("../dblocal");

studentRouter.post("/", async (req, res) => {
  const { name, rank } = req.body;
  const respond = await db.students.insertOne({
    name,
    rank,
  });
  console.log("insert success!");
  res.json(respond);
});

studentRouter.post("/many", async (req, res) => {
  try {
    const respond = await db.students.insertMany(req.body["daa"]);
    res.status(201);
    res.json(respond);
  } catch (error) {
    res.status(500);
    res.json("something went wrong!");
  }
});

module.exports = studentRouter;
