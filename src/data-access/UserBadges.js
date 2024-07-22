const { DataTypes } = require('sequelize');
const { sequelizeInit } = require('../config/database');


const UserBadges = sequelizeInit.define('UserBadges', {
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
    tableName: 'UserBadges',
    timestamps: false
});
module.exports = { UserBadges };