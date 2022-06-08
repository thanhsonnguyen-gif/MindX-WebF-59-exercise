const express = require("express");
const studentRouter = express();
const bodyParser = require("body-parser");
studentRouter.use(bodyParser.json({ extended: true }));

const student = [
  {
    id: 1,
    name: "Sang",
  },
  {
    id: 2,
    name: "Son",
  },
  {
    id: 3,
    name: "Duc",
  },
];

studentRouter.get("/", (req, res) => {
  res.send(student);
});

studentRouter.post("/", (req, res) => {
  const { id, name } = req.body;
  student.push({
    id, //id: req.body.id
    name, //name: req.body.name
  });
  res.status(201);
  res.json(student);
});

studentRouter.put("/:id", (req, res) => {
  student[req.params.id].name = req.query.name;
  res.status(201);
  res.json(student);
});

studentRouter.delete("/", (req, res) => {
  student.shift();
  res.json(student);
  res.status(201);
});

module.exports = studentRouter;
