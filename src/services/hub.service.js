const { HubAttendees } = require('../data-access/HubAttendees');
const { Hubs } = require('../data-access/Hubs');
const Hub = require('../models/hub');
const userService = require('./user.service');

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
            return hub;
        } catch (error) {
            throw new Error(`Error finding hub: ${error.message}`);
        }
    }
    async getAllHubs() {
        try {
            const hubs = await Hubs.findAll();
            for (let hubIndex = 0; hubIndex < hubs.length; hubIndex++) {
                this.loadAttendeesToHub(hubs[hubIndex]);
            }
            return hubs;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
    async loadAttendeesToHub(hubToFill) {
        var hubAttendees = await HubAttendees.findAll({
            where: {
                hubId: hubToFill.id
            }
        });
        for (let attendeesIndex = 0; attendeesIndex < hubAttendees.length; attendeesIndex++) {
            const hubAttendee = hubAttendees[attendeesIndex];
            const attendee = await userService.findUserById(hubAttendee.userId)
            if (attendee) {
                if (hubToFill.dataValues.attendees) {
                    hubToFill.dataValues.attendees.push(attendee)
                }
                else {
                    hubToFill.dataValues.attendees = [attendee]
                }
            }
        }
    }
}

module.exports = new HubService();