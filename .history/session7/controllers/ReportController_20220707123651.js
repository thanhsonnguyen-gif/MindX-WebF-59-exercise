const {
  findReportById,
  findReportByName,
  findAllReports,
  findReportsByUserId,
  removeReportsById,
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
module.exports = { getReportById, getReportByName, getAllReports, getReportsByUserId, deleteReportsById };
