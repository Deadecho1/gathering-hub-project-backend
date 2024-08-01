const { HubAttendees } = require('../data-access/HubAttendees');
const { Hubs } = require('../data-access/Hubs');
const { HubStations } = require('../data-access/HubStations');
const userService = require('./user.service');
const stationService = require('./station.service');
const { Hub } = require('../models/Hub');
const coordinateService = require('./coordinate.service');


class HubService {
    constructor() {
    }
    async createHub(name, badge, openingHour, closingHour, location, rating, phone, avatar, logo, about, coordId, ownerId) {
        try {
            const mapCoordinates = [20, 30]
            const location = 'https://maps.app.goo.gl/gNNFXKJFURuYCCfz7'
            const rating = 4.4
            avatar = 'castle'
            const newHub = new Hub(name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, logo, about, coordId, ownerId, [], []);
            const hubResponse = await Hubs.create(newHub);
            if (hubResponse) {
                await coordinateService.createHubCoordinate(mapCoordinates[0], mapCoordinates[1], hubResponse.id)
            }
            return hubResponse;
        } catch (error) {
            throw new Error(`Error creating hub: ${error.message}`);
        }
    }

    async updateHub(hubToUpdate, hubReference) {
        try {
            await hubReference.update(hubToUpdate);
        } catch (error) {
            throw new Error(`Error updating hub: ${error.message}`);
        }
    }

    async deleteHub(hubId) {
        try {
            const hub = await Hubs.findOne(hubId);
            if (!hub) {
                throw new Error('Hub not found');
            }
            await hub.destroy();
        } catch (error) {
            throw new Error(`Error deleting hub: ${error.message}`);
        }
    }
    async findHubById(hubId) {
        try {
            const hub = await Hubs.findByPk(hubId)
            if (!hub) {
                throw new Error('Hub not found');
            }
            await this.loadAttendeesToHub(hub);
            await this.loadStationsToHub(hub);
            return hub;
        } catch (error) {
            throw new Error(`Error finding hub: ${error.message}`);
        }
    }
    async getAllHubs() {
        try {
            const hubs = await Hubs.findAll();
            for (let hubIndex = 0; hubIndex < hubs.length; hubIndex++) {
                await this.loadAttendeesToHub(hubs[hubIndex]);
                await this.loadStationsToHub(hubs[hubIndex]);

            }
            return hubs;
        } catch (error) {
            throw new Error(`Error finding hub: ${error.message}`);
        }
    }
    async loadAttendeesToHub(hubToFill) {
        var hubAttendees = await HubAttendees.findAll({
            where: {
                hubId: hubToFill.id
            }
        });
        hubToFill.dataValues.attendees = [];

        for (let attendeesIndex = 0; attendeesIndex < hubAttendees.length; attendeesIndex++) {
            const hubAttendee = hubAttendees[attendeesIndex];
            const attendee = await userService.findUserById(hubAttendee.userId)
            if (attendee) {
                hubToFill.dataValues.attendees.push(attendee)

            }
        }
    }
    async loadStationsToHub(hubToFill) {
        try {
            var hubAttendees = await HubStations.findAll({
                where: {
                    hubId: hubToFill.id
                }
            });
            console.log(hubAttendees)
            console.log(hubToFill)
            hubToFill.dataValues.stations = [];

            for (let stationIndex = 0; stationIndex < hubAttendees.length; stationIndex++) {
                const hubStation = hubAttendees[stationIndex];
                console.log(hubStation)
                const station = await stationService.findStationById(hubStation.stationId)
                console.log(station)
                if (station) {
                    hubToFill.dataValues.stations.push(station)
                    console.log(hubToFill.dataValues.stations)

                }
            }
        } catch (error) {
            throw new Error(`Error loading stations: ${error.message}`);
        }

    }
}

module.exports = new HubService();