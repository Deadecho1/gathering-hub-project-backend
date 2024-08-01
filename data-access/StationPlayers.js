const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const StationPlayers = sequelizeInit.define('tbl_114_station_players', {
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
    tableName: 'tbl_114_station_players',
    timestamps: false
});
module.exports = { StationPlayers };