const db = require("../models");

const getAllUser = async() => {
    let sql = 'SELECT * FROM USER';

    return await db.sequelize.query(sql, {
        // replacements: replacementsObj,
        bind: searchObj,
        type: db.sequelize.QueryTypes.SELECT
    });
}

module.exports = {
    getAllUser
}