const { DataTypes, Sequelize } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const Coordinates = sequelizeInit.define('tbl_3_coordinates', {
    latitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false,
    },
}, {
    tableName: 'tbl_3_coordinates',
    timestamps: false
});


module.exports = { Coordinates };