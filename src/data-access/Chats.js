const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Chats = sequelizeInit.define('Chats', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Chats',
    timestamps: false
});

module.exports = { Chats };