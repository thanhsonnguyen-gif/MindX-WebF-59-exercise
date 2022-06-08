
const fs = require("fs");

function historyLogUser(req, res, next) {
  // const data2 = fs.readFileSync('./logData.json')
  // const historyDataLog = JSON.parse(data2)
  // // const newLog = {
  // //   time: `${new Date()}`,
  // //   user: `${req.body.username}`,
  // //   pass: `${req.body.apiKey}`,
  // // };
  // // historyDataLog["dataUser"].splice(historyDataLog.length, 0, newLog);
  // // fs.writeFileSync("./log.json", JSON.stringify(historyDataLog));

  // console.log(historyDataLog) 

  //$chua push duoc vao file .json$
  console.log(`App running at ${new Date()}`)
  next();
}

module.exports = historyLogUser;
