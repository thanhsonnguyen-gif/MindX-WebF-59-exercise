const { db } = require("./");
const { ObjectId } = require("mongodb");
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
const findAllReports = async () => {
  const reports = await db.reports.find({}).toArray();
  return reports;
};
const findReportsByUserId = async (userId) => {
  const reports = await db.reports
    .find({
      userOwnId: ObjectId(userId),
    })
    .toArray();
  return reports;
};
module.exports = {
  findReportById,
  findReportByName,
  findAllReports,
  findReportsByUserId,
};
