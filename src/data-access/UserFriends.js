const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');

const UserFriends = sequelizeInit.define('tbl_10_user_friends', {
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
    tableName: 'tbl_10_user_friends',
    timestamps: false
});
module.exports = { UserFriends };