const express = require("express");
const studentRouter = express.Router();

const Student = [
  {
    id: 1,
    name: "Tai",
    age: 14,
  },
  {
    id: 2,
    name: "Minh",
    age: 14,
  },
  {
    id: 3,
    name: "Nghia",
    age: 15,
  },
];

studentRouter.get("/", (req, res) => {
  res.send("hello from studentRouter");
});

studentRouter.post("/", (req, res, next) => {
  Student.push({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
  });
  res.json(Student);
  next();
});

module.exports = studentRouter;
