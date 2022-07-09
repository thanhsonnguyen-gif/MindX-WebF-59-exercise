const { db } = require("./");
const { ObjectID, ObjectId } = require("mongodb");
const findReportById = async (id)=>{
    const report = await db.reports.findOne({
        _id: ObjectId(id)
    })
    return report
}
module.exports = {findReportById};
