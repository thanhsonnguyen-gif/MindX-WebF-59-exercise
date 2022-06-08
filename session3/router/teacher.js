const express = require("express");
const teacherRouter = express.Router();

const Teacher = [
  {
    id: 1,
    name: "Dung",
    age: 30,
  },
  {
    id: 2,
    name: "Dai",
    age: 29,
  },
  {
    id: 3,
    name: "Quan",
    age: 25,
  },
];

teacherRouter.get("/", (req, res) => {
  res.send("hello from teacherRouter");
});

teacherRouter.post("/", (req, res, next) => {
  Teacher.push({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  });
  res.json(Teacher);
  next();
});

module.exports = teacherRouter;
