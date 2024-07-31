const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const HubStations = sequelizeInit.define('tbl_6_hub_stations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stationId: {
        type: DataTypes.INTEGER,
    }
}, {
    tableName: 'tbl_6_hub_stations',
    timestamps: false
});
module.exports = { HubStations };