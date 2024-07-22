const { DataTypes, Sequelize } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const Coordinates = sequelizeInit.define('Coordinates', {
    latitude: {
        type: DataTypes.DECIMAL(10, 6), 
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(10, 6), 
        allowNull: false,
    },
}, {
    tableName: 'Coordinates',
    timestamps: false
});


module.exports = { Coordinates};