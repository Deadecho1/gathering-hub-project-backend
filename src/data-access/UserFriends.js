const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const UserFriends = sequelizeInit.define('UserFriends', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    friendId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'UserFriends',
    timestamps: false
});
module.exports = { UserFriends };