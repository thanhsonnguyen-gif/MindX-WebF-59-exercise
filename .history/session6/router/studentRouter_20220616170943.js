const express = require("express");
const { ObjectId } = require("mongodb");
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
    const respond = await db.students.insertMany(req.body["data"]);
    res.status(201);
    res.json(respond);
  } catch (error) {
    res.status(500);
    res.json("something went wrong!");
  }
});

studentRouter.get("/", async (req, res) => {
  try {
    const { id, name, rank } = req.headers;

    let studentResult;
    if (id) {
      studentResult = await db.students.findOne({
        _id: new ObjectId(id),
      });
    } else if (name) {
      studentResult = await db.students
        .find({
          name,
        })
        .toArray();
    } else if (rank) {
      studentResult = await db.students
        .find({
          rank: +rank, //convert req.headers.rank to number to compare
        })
        .toArray();
    } else {
      studentResult = await db.students.find().skit(2).limit(5).toArray();
    }
    res.status(201);
    res.json(studentResult);
  } catch (error) {
    res.status(500);
    res.json("something went wrong!");
  }
});

studentRouter.put("/", async (req, res) => {
  try {
    const id = req.headers.id;
    const inforUpdate = req.body;
    const filter = { _id: new ObjectId(id) };
    const inforNew = { $set: inforUpdate };
    const studentInforUpdated = await db.students.updateOne(filter, inforNew);
    res.json(studentInforUpdated);
  } catch (error) {
    res.status(500);
    res.json("something went wrong!");
  }
});

module.exports = studentRouter;
