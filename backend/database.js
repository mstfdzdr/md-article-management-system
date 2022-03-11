const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'sqlite',
    host: process.env.DB_HOST || ':memory:' // Or './database.sqlite' if running on localhost
});
module.exports = sequelize;