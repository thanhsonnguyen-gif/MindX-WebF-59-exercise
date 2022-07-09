const { db } = require("./");
const { ObjectID, ObjectId } = require("mongodb");
const findReportById = async (id) => {
  const report = await db.reports.findOne({
    _id: ObjectId(id),
  });
  return report;
};
const findReportByName = async (Name) => {
  const reports = await db.reports
    .find({
      Name,
    })
    .toArray();
  return reports;
};
module.exports = { findReportById, findReportByName };
