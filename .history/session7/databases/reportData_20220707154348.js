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
      name: Name,
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
      userOwnId: new ObjectId(userId),
    })
    .toArray();
  return reports;
};
const removeReportsById = async (id) => {
    const report = await db.users.deleteOne({
      _id: ObjectId(id),
    });
    return report;
  };
const modifiedReportsById = async (id, infoNeedUpdate) => {
    const reports = await db.reports.updateOne(
        {
          _id: ObjectId(id),
        },
        {
          $set: infoNeedUpdate,
        },
      );
    //   console.log(reports)
      return reports;
};

module.exports = {
  findReportById,
  findReportByName,
  findAllReports,
  findReportsByUserId,
  removeReportsById,
  modifiedReportsById,
};
