const express = require("express");
const app = express();
const port = 3000;
const studentRouter = require("./router/student");
const teacherRouter = require("./router/teacher");

app.get("/", (req, res) => {
  res.send("hello form session2");
});

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);

app.listen(port, () => {
  console.log(`App running in port ${port}`);
});
