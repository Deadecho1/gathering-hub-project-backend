const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const UserBadges = sequelizeInit.define('tbl_9_user_badges', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    badgeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'tbl_9_user_badges',
    timestamps: false
});
module.exports = { UserBadges };