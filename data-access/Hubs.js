const { DataTypes } = require('sequelize');

const { sequelizeInit } = require('../config/database');
const { Coordinates } = require('./Coordinates');


const Hubs = sequelizeInit.define('tbl_114_hubs', {
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
        type: DataTypes.STRING,
        allowNull: false
    },
    closingHour: {
        type: DataTypes.STRING,
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
        type: DataTypes.DECIMAL(5, 2),
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
    logo: {
        type: DataTypes.STRING,
        allowNull: true
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
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        }
    },
    locationUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    reviews: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    websiteUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    tableName: 'tbl_114_hubs',
    timestamps: false
});

module.exports = { Hubs };