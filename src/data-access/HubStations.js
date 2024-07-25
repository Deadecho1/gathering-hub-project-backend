const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const HubStations = sequelizeInit.define('HubStations', {
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
    tableName: 'HubStations',
    timestamps: false
});
module.exports = { HubStations };