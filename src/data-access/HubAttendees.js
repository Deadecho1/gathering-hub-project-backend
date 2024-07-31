const { DataTypes, } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const HubAttendees = sequelizeInit.define('tbl_4_hub_attendees', {
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
    tableName: 'tbl_4_hub_attendees',
    timestamps: false
});


module.exports = { HubAttendees };