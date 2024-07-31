const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Badges = sequelizeInit.define('tbl_1_badges', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tbl_1_badges',
    timestamps: false
});

module.exports = { Badges };