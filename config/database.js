require('dotenv').config();
const { Sequelize } = require("sequelize");
const sequelizeInit = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
        connectTimeout: 60000,
    },
});
module.exports = { sequelizeInit };

const { Badges } = require('../data-access/Badges');
const { Coordinates } = require('../data-access/Coordinates');
const { Hubs } = require('../data-access/Hubs');
const { Stations } = require('../data-access/Stations');
const { UserFriends } = require('../data-access/UserFriends');
const { Users } = require('../data-access/Users');
const { setRelationships } = require('../data-access/Relationships.js');
const { loadBadges, loadUsersAndFriends, loadHubsData, loadCoordinates } = require('../data-access/DataLoader.js');
const { HubAttendees } = require('../data-access/HubAttendees');
const { HubStations } = require('../data-access/HubStations');
const { Chats } = require('../data-access/Chats.js');

module.exports = { dbSync };


async function syncTables() {

    try {
        if (process.env.DB_SYNC === "true") {
            await Badges.sync();
            await Coordinates.sync();
            await Hubs.sync();
            await Stations.sync();
            await Users.sync();
            await Chats.sync();
            await UserFriends.sync();
            await HubAttendees.sync();
            await HubStations.sync();
            console.log("Models sync up.");
        }
    } catch (error) {
        console.error("Error syncing db:", error);
    }
};

async function dbSync() {
    await setRelationships();
    await syncTables();
    await authenticateSequelize();
    await loadBadges();
    await loadUsersAndFriends();
    await loadHubsData();
    await loadCoordinates();
};

async function authenticateSequelize() {
    try {
        await sequelizeInit.authenticate();
        console.log('Connection has been established successfully.');
        await sequelizeInit.sync({ force: true });
        return sequelizeInit;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return null;
    }
};
