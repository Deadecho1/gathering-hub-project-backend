const { DataTypes, } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const HubAttendees = sequelizeInit.define('HubAttendees', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'HubAttendees',
    timestamps: false
});


module.exports = { HubAttendees };