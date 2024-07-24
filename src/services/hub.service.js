const { HubAttendees } = require('../data-access/HubAttendees');
const { Hubs } = require('../data-access/Hubs');
const { HubStations } = require('../data-access/HubStations');
const Hub = require('../models/hub');
const userService = require('./user.service');
const stationService = require('./station.service');

class HubService {
    constructor() {
    }

    async createHub({ name, lvl, avatar, avatarBg, coordId }) {
        try {
            const newHub = new Hub(name, lvl, avatar, avatarBg, coordId);
            await Hubs.create(newHub);
            return newHub;
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
        var hubAttendees = await HubStations.findAll({
            where: {
                hubId: hubToFill.id
            }
        });
        hubToFill.dataValues.stations = [];

        for (let stationIndex = 0; stationIndex < hubAttendees.length; stationIndex++) {
            const hubStation = hubAttendees[stationIndex];
            const station = await stationService.findStationById(hubStation.stationId)
            if (station) {
                hubToFill.dataValues.stations.push(station)

            }
        }
    }
}

module.exports = new HubService();