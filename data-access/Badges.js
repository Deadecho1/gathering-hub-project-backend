const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Badges = sequelizeInit.define('tbl_114_badges', {
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
    tableName: 'tbl_114_badges',
    timestamps: false
});

module.exports = { Badges };