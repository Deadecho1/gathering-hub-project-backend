const { DataTypes } = require('sequelize');

const { sequelizeInit } = require('../config/database');
const { Coordinates } = require('./Coordinates');


const Hubs = sequelizeInit.define('Hubs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    badge: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openingHour: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    closingHour: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mapCoordinates: {
        type: DataTypes.JSON,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coordId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Coordinates',
            key: 'id',
        }
    }
}, {
    tableName: 'Hubs',
    timestamps: false
});

module.exports = { Hubs };