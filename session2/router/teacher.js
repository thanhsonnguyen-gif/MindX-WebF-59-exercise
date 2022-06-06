const express = require("express");
const teacherRouter = express();
const bodyParser = require("body-parser");
teacherRouter.use(bodyParser.json({ extended: true }));

const teachers = [
  {
    id: 1,
    name: "Son",
    job: "teacher",
  },
  {
    id: 2,
    name: "Sang",
    job: "teacher",
  },
  {
    id: 3,
    name: "Duc",
    job: "teacher",
  },
];
//GET
teacherRouter.get("/", (req, res) => {
  res.status(201);
  res.send(teachers);
});

//POST
teacherRouter.post("/", (req, res) => {
  teachers.push({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
  });
  res.status(201);
  res.json(teachers);
});

//PUT
teacherRouter.put("/:index", (req, res) => {
  // console.log(teachers)
  teachers[req.params.index].id = req.body.id;
  teachers[req.params.index].name = req.body.name;
  teachers[req.params.index].job = req.body.job;
  res.status(202);
  res.json(teachers);
});
module.exports = teacherRouter;

//DELETE
teacherRouter.delete("/", (req, res) => {
  teachers.pop();
  res.status(203);
  res.json(teachers);
});
