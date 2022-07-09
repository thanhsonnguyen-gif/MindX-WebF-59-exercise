const {
  findReportById,
  findReportByName,
  findAllReports,
  findReportsByUserId,
  removeReportsById,
  modifiedReportsById,
  insertReport,
  countingReports,
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
const getReportsByUserId = async (userId) => {
  const reports = await findReportsByUserId(userId);
  return reports;
};
const deleteReportsById = async (Id) => {
  const reports = await removeReportsById(Id);
  return reports;
};
const updateReportById = async (Id, infoNeedUpdate) => {
  const reports = await modifiedReportsById(Id, infoNeedUpdate);
  return reports;
};
const addReport = async (infos) => {
  const reportInserted = await insertReport(infos);
  return reportInserted;
};

const countReports = async () => {
  const count = await countingReports();
  return count;
};

module.exports = {
  getReportById,
  getReportByName,
  getAllReports,
  getReportsByUserId,
  deleteReportsById,
  updateReportById,
  addReport,
  countReports,
};
