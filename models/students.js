const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Student = db.define('students', {
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
});

module.exports = Student;