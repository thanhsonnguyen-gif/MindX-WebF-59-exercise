const { findReportById, findReportByName } = require("../databases/reportData");
const getReportById = async (id) => {
  const report = await findReportById(id);
  return report;
};
const getReportByName = async (Name) => {
  const reports = await findReportByName(Name);
  return reports;
};
module.exports = { getReportById, getReportByName };
