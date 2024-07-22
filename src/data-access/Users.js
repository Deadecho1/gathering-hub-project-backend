const { DataTypes, Sequelize } = require('sequelize');

const { sequelizeInit } = require('../config/database');
const { Coordinates } = require('./Coordinates');

const Users = sequelizeInit.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lvl: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatarBg: {
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
    tableName: 'Users',
    timestamps: false
});
module.exports = { Users }