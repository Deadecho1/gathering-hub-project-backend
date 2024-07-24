const { Badges } = require("./Badges");
const { Coordinates, User } = require("./Coordinates");
const { HubAttendees } = require("./HubAttendees");
const { Hubs } = require("./Hubs");
const { HubStations } = require("./HubStations");
const { Stations } = require("./Stations");
const { UserBadges } = require("./UserBadges");
const { UserFriends } = require("./UserFriends");
const { Users } = require("./Users");

module.exports = {
    loadBadges,
    loadUsersAndFriends,
    loadHubsData,
    loadCoordinates,
};

async function loadBadges() {
    const jsonData = {
        "1": "coin",
        "2": "fire",
        "3": "flower",
        "4": "heart",
        "5": "sun"
    };
    try {
        await Promise.all(
            Object.keys(jsonData).map(async (key) => {
                const badgeName = jsonData[key];
                await Badges.create({ name: badgeName });
            })
        );
    } catch (error) {
        console.error('Error loading badges:', error);
    }
}

async function loadUsersAndFriends() {
    const usersData = {
        "1": {
            "name": "MATAN2008",
            "lvl": 4,
            "avatar": "angel",
            "avatarBg": "cherry-pink",
            "friends": [2],
            "badges": ["fire"]

        },
        "2": {
            "name": "Benthehero1",
            "lvl": 10,
            "avatar": "hero",
            "avatarBg": "city-night",
            "friends": [4],
            "badges": []
        },
        "3": {
            "name": "Gandalf2",
            "lvl": 5,
            "avatar": "mage",
            "avatarBg": "cherry-pink",
            "friends": [4, 5],
            "badges": []


        },
        "4": {
            "name": "Jessy2",
            "lvl": 7,
            "avatar": "princess",
            "avatarBg": "cherry-pink",
            "friends": [3],
            "badges": []

        },
        "5": {
            "name": "Poopo",
            "lvl": 11,
            "avatar": "mage",
            "avatarBg": "city-night",
            "friends": [3],
            "badges": []

        }
    }
    try {
        for (const [id, user] of Object.entries(usersData)) {
            await Users.create({
                id: parseInt(id),
                name: user.name,
                lvl: user.lvl,
                avatar: user.avatar,
                avatarBg: user.avatarBg,
            });
            for (const badgeName of user.badges) {
                const badge = await Badges.findOne({
                    where: {
                        name: badgeName
                    }
                });
                await UserBadges.create({
                    userId: parseInt(id),
                    badgeId: badge.id,
                });
            }
        }

        for (const [id, user] of Object.entries(usersData)) {
            for (const friendId of user.friends) {
                await UserFriends.create({
                    userId: parseInt(id),
                    friendId: friendId,
                });
            }
        }


        console.log('Users loaded.');
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

async function loadHubsData() {
    const hubsData = {
        "1": {
            "name": "Crispy Shnitzel",
            "badge": "fire",
            "openingHour": "1200",
            "closingHour": "0000",
            "mapCoordinates": [32.07509444461784, 34.774994205870584],
            "location": "Shnitzel Street 1",
            "rating": 3,
            "phone": "+972 4246894",
            "attendees": [],
            "avatar": "castle",
            "stations": [
                {
                    "stationId": "station 1",
                    "platform": "switch",
                    "game": "ssbu",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 2",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 3",
                    "platform": "xbox",
                    "game": "party_animals",
                    "maxPlayers": 8,
                    "currPlayers": 0,
                    "players": []
                }
            ],
            "about": "This is Crispy Shnitzel."
        },
        "2": {
            "name": "Burgery",
            "badge": "flower",
            "openingHour": "1400",
            "closingHour": "0000",
            "mapCoordinates": [32.07143510946054, 34.81921554660643],
            "location": "Somewhere Street 2",
            "rating": 4,
            "phone": "+972 4246893",
            "attendees": [],
            "avatar": "chinese",
            "stations": [
                {
                    "stationId": "station 1",
                    "platform": "switch",
                    "game": "ssbu",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 2",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 3",
                    "platform": "xbox",
                    "game": "party_animals",
                    "maxPlayers": 8,
                    "currPlayers": 0,
                    "players": []
                }
            ],
            "about": "This is Burgery."
        },
        "3": {
            "name": "Tasty Food",
            "badge": "sun",
            "openingHour": "0800",
            "closingHour": "2100",
            "mapCoordinates": [32.07143510946054, 35],
            "location": "Somewhere Street 3",
            "rating": 4,
            "phone": "+972 4246892",
            "attendees": [],
            "avatar": "chinese",
            "stations": [
                {
                    "stationId": "station 1",
                    "platform": "switch",
                    "game": "ssbu",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 2",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 3",
                    "platform": "xbox",
                    "game": "party_animals",
                    "maxPlayers": 8,
                    "currPlayers": 0,
                    "players": []
                }
            ],
            "about": "This is Tasty Food."
        },
        "4": {
            "name": "Level Up",
            "badge": "coin",
            "openingHour": "1200",
            "closingHour": "2130",
            "mapCoordinates": [32.06321492675298, 34.78372421163784],
            "location": "Somewhere Street 4",
            "rating": 4,
            "phone": "+972 4246895",
            "attendees": [
                {
                    "id": 2
                },
                {
                    "id": 3
                },
                {
                    "id": 4
                },
                {
                    "id": 5
                }
            ],
            "avatar": "chinese",
            "stations": [
                {
                    "stationId": "station 1",
                    "platform": "switch",
                    "game": "ssbu",
                    "maxPlayers": 4,
                    "currPlayers": 4,
                    "players": [2, 3, 4, 5]
                },
                {
                    "stationId": "station 2",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 3",
                    "platform": "xbox",
                    "game": "party_animals",
                    "maxPlayers": 8,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 4",
                    "platform": "pc",
                    "game": "lol",
                    "maxPlayers": 1,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 5",
                    "platform": "switch",
                    "game": "",
                    "maxPlayers": 2,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 6",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                }
            ],
            "about": "This is Level Up."
        },
        "5": {
            "name": "Parisis",
            "badge": "heart",
            "openingHour": "1200",
            "closingHour": "2200",
            "mapCoordinates": [33.06321492675298, 34.78372421163784],
            "location": "Somewhere Street 5",
            "rating": 4,
            "phone": "+972 4246898",
            "attendees": [],
            "avatar": "castle",
            "stations": [
                {
                    "stationId": "station 1",
                    "platform": "switch",
                    "game": "ssbu",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 2",
                    "platform": "xbox",
                    "game": "",
                    "maxPlayers": 4,
                    "currPlayers": 0,
                    "players": []
                },
                {
                    "stationId": "station 3",
                    "platform": "xbox",
                    "game": "party_animals",
                    "maxPlayers": 8,
                    "currPlayers": 0,
                    "players": []
                }
            ],
            "about": "This is Parisis."
        }
    };
    try {
        for (const [id, hub] of Object.entries(hubsData)) {
            const createdHub = await Hubs.create({
                id: parseInt(id),
                name: hub.name,
                badge: hub.badge,
                openingHour: parseInt(hub.openingHour),
                closingHour: parseInt(hub.closingHour),
                mapCoordinates: hub.mapCoordinates,
                location: hub.location,
                rating: hub.rating,
                phone: hub.phone,
                avatar: hub.avatar,
                about: hub.about
            });

            for (const hubStation of hub.stations) {
                await Stations.create({
                    stationId: hubStation.stationId,
                    platform: hubStation.platform,
                    game: hubStation.game,
                    maxPlayers: hubStation.maxPlayers,
                    currPlayers: hubStation.currPlayers,
                });

                const station = await Stations.findOne({
                    where: {
                        stationId: hubStation.stationId
                    }
                });

                await HubStations.create({
                    hubId: parseInt(id),
                    stationId: station.id
                })
            }

            for (const attendee of hub.attendees) {
                const user = await Users.findByPk(attendee.id);
                if (user) {
                    HubAttendees.create({
                        hubId: id,
                        userId: attendee.id
                    })
                } else {
                    console.warn(`Usuario with id ${attendee.id} not found.`);
                }
            }
        }

        console.log('Hubs loaded');
    } catch (error) {
        console.error('Error loading hubs', error);
    }
}

async function loadCoordinates() {
    const userCoordinates = {
        "2": {
            latitude: 80,
            longitude: 50
        },
        "3": {
            latitude: 20,
            longitude: 50
        }
    };

    const hubCoordinates = {
        "4": {
            latitude: 70,
            longitude: 80
        },
        "1": {
            latitude: 20,
            longitude: 20
        }
    };

    try {
        for (const userId of Object.keys(userCoordinates)) {
            const { latitude, longitude } = userCoordinates[userId];
            const coordinates = await Coordinates.create({ latitude, longitude });
            const user = await Users.findByPk(parseInt(userId));
            if (user) {
                await user.update({ coordId: coordinates.id });
                await coordinates.update({ UserId: user.id });
            } else {
                console.warn(`User with ID ${userId} not found. Skipping coordinates.`);
            }
        }
        for (const hubId of Object.keys(hubCoordinates)) {
            const { latitude, longitude } = hubCoordinates[hubId];
            const coordinates = await Coordinates.create({ latitude, longitude });
            const hub = await Hubs.findByPk(parseInt(hubId));
            if (hub) {
                await hub.update({ coordId: coordinates.id });
                await coordinates.update({ HubId: hub.id });


            } else {
                console.warn(`Hub with ID ${hubId} not found. Skipping coordinates.`);
            }
        }

        console.log('Coords loaded.');
    } catch (error) {
        console.error('Error loading cords:', error);
    }
};

