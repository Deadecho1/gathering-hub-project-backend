const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Chats = sequelizeInit.define('tbl_114_chats', {
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
    tableName: 'tbl_114_chats',
    timestamps: false
});

module.exports = { Chats };