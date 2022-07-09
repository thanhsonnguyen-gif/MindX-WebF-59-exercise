const {
  findReportById,
  findReportByName,
  findAllReports,
} = require("../databases/reportData");
const getReportById = async (id) => {
  const report = await findReportById(id);
  return report;
};
const getReportByName = async (Name) => {
  const reports = await findReportByName(Name);
  return reports;
};
const getAllReports = async () => {
  const reports = await findAllReports();
  return reports;
};
module.exports = { getReportById, getReportByName, getAllReports };
