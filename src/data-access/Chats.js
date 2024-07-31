const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const Chats = sequelizeInit.define('tbl_2_chats', {
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
    tableName: 'tbl_2_chats',
    timestamps: false
});

module.exports = { Chats };