const { Badges } = require('./Badges');
const { Coordinates, User } = require('./Coordinates');
const { Hubs } = require('./Hubs');
const { Stations } = require('./Stations');
const { UserFriends } = require('./UserFriends');
const { Users } = require('./Users');


const setRelationships = async () => {
    Users.belongsToMany(Users, { as: 'Friends', through: UserFriends, foreignKey: 'userId', otherKey: 'friendId' });

    Users.belongsToMany(Badges, { through: 'UserBadges', foreignKey: 'userId' });
    Badges.belongsToMany(Users, { through: 'UserBadges', foreignKey: 'badgeId' });

    Stations.hasMany(Users, { foreignKey: 'userId' });
    Users.belongsTo(Stations, { foreignKey: 'stationId' });

    Hubs.hasMany(Stations, { foreignKey: 'stationId' });
    Stations.belongsTo(Hubs, { foreignKey: 'hubId' });

    Hubs.belongsToMany(Users, { through: 'HubAttendees', foreignKey: 'hubId' });
    Users.belongsToMany(Hubs, { through: 'HubAttendees', foreignKey: 'userId' });

    Hubs.belongsToMany(Stations, {
        through: 'HubStations',
        foreignKey: 'hubId',
    });

    Stations.belongsToMany(Hubs, {
        through: 'HubStations',
        foreignKey: 'stationId',
    });

    Users.hasOne(Coordinates);
    Coordinates.belongsTo(Users);

    Hubs.hasOne(Coordinates);
    Coordinates.belongsTo(Hubs);
};

module.exports = { setRelationships };