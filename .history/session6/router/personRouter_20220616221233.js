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

module.exports = personRouter;
