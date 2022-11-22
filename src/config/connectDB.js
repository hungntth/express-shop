const { Sequelize } = require('sequelize');
const database = require('./database.json')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    database.development.database,
    database.development.username,
    database.development.password, {
    host: database.development.host,
    dialect: database.development.dialect,
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối DB thành công.');
    } catch (error) {
        console.error(
            `Kết nối tới DB thất bại, lý do: 
            ${error}`
        );
    }
}

module.exports = connect
