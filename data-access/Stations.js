const { DataTypes } = require('sequelize');

const { sequelizeInit } = require('../config/database');

const Stations = sequelizeInit.define('tbl_114_stations', {
    stationName: {
        type: DataTypes.STRING,
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    game: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maxPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'tbl_114_stations',
    timestamps: false
});

module.exports = { Stations };