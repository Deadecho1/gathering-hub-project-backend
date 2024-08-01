const { Badges } = require('./Badges');
const { Coordinates, User } = require('./Coordinates');
const { Hubs } = require('./Hubs');
const { Stations } = require('./Stations');
const { UserFriends } = require('./UserFriends');
const { Users } = require('./Users');


const setRelationships = async () => {
    Users.belongsToMany(Users, { as: 'Friends', through: UserFriends, foreignKey: 'userId', otherKey: 'friendId' });

    Users.belongsToMany(Badges, { through: 'tbl_114_user_badges', foreignKey: 'userId' });
    Badges.belongsToMany(Users, { through: 'tbl_114_user_badges', foreignKey: 'badgeId' });


    Hubs.hasMany(Stations, { foreignKey: 'stationId' });
    Stations.belongsTo(Hubs, { foreignKey: 'hubId' });

    Hubs.belongsToMany(Users, { through: 'tbl_114_hub_attendees', foreignKey: 'hubId' });
    Users.belongsToMany(Hubs, { through: 'tbl_114_hub_attendees', foreignKey: 'userId' });

    Users.hasOne(Coordinates);
    Coordinates.belongsTo(Users);

    Hubs.hasOne(Coordinates);
    Coordinates.belongsTo(Hubs);
};

module.exports = { setRelationships };