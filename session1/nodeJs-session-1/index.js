// const {sum, sub, multi} = require("./customModule/math")

// console.log(multi(2,2));

const fs = require("fs");

const data2 = fs.readFileSync("./student.json"); //doc 1 lan

const students = JSON.parse(data2);

const newStudent = {
  id: 1,
  name: "Thanh",
  gender: "Female",
};

students["data"][0]["id"] = 1; //update

students["data"].push(newStudent); //add

students["data"].splice(1, 1) //delete

fs.writeFileSync("./student.json", JSON.stringify(students)); //ghi 1 lan