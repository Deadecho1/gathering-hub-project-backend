const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Badges = sequelizeInit.define('Badges', {
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
    tableName: 'Badges',
    timestamps: false
});

module.exports = { Badges };