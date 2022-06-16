const express = require("express");
const { ObjectId } = require("mongodb");
const personRouter = express.Router();
const { db } = require("../dblocal");

personRouter.post("/many", async (req, res) => {
  try {
    const respond = await db.persons.insertMany(req.body["data"]);
    res.status(201);
    res.json(respond);
  } catch (error) {
    res.status(500);
    res.json("something went wrong!");
  }
});

personRouter.get("/", async (req, res) => {
    try {
      const { id, name, rank } = req.headers;
  
      let personResult;
      if (id) {
        personResult = await db.persons.findOne({
          _id: new ObjectId(id),
        });
      } else if (name) {
        personResult = await db.persons
          .find({
            name,
          })
          .toArray();
      } else if (rank) {
        personResult = await db.persons
          .find({
            rank: +rank, //convert req.headers.rank to number to compare
          })
          .toArray();
      } else {
        personResult = await db.persons.find().skip(2).limit(5).toArray(); //.skip() and .limit() to pagination
      }
      res.status(201);
      res.json(personResult);
    } catch (error) {
      res.status(500);
      res.json("something went wrong!");
    }
  });

module.exports = personRouter;
