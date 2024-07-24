const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const StationPlayers = sequelizeInit.define('StationPlayers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'StationPlayers',
    timestamps: false
});
module.exports = { StationPlayers };