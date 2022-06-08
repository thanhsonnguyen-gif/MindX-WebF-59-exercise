const express = require("express");
const subjectRouter = express.Router();

const Subject = [
  {
    id: 1,
    name: "Toan",
  },
  {
    id: 2,
    name: "Van",
  },
  {
    id: 3,
    name: "Anh",
  },
];

subjectRouter.get("/", (req, res) => {
  res.send("hello from subjectRouter");
});

subjectRouter.post("/", (req, res, next) => {
  Subject.push({
    id: req.body.id,
    name: req.body.name,
  });
  res.json(Subject);
  next();
});

module.exports = subjectRouter;
