const { Sequelize, DataTypes } = require('sequelize');

//create connection
const db = new Sequelize('demo_db', 'test', 'Test123@', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;