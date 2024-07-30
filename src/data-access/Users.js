const { DataTypes } = require('sequelize');

const { sequelizeInit } = require('../config/database');

const Users = sequelizeInit.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
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
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    tableName: 'Users',
    timestamps: false
});
module.exports = { Users }