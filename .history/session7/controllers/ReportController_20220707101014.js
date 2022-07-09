const { findReportById } = require("../databases/reportData");
const getReportById = async (id) => {
  const report = await findReportById(id);
  return report;
};
module.exports = { getReportById };
