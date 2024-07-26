const { StationPlayers } = require('../data-access/StationPlayers');
const { Stations } = require('../data-access/Stations');
const userService = require('./user.service');
const { Station } = require('../models/Station');

class StationService {
    constructor() {
    }

    async createStation(stationId, platform, game, maxPlayers, currPlayers, players, hubId) {
        try {
            const newStation = new Station(stationId, platform, game, maxPlayers, currPlayers, players, hubId);
            await Stations.create(newStation);
            return newStation;
        } catch (error) {
            throw new Error(`Error creating station: ${error.message}`);
        }
    }

    async updateStation(stationToUpdate, stationReference) {
        try {
            await stationReference.update(stationToUpdate);
        } catch (error) {
            throw new Error(`Error updating station: ${error.message}`);
        }
    }

    async deleteStation(stationId) {
        try {
            const station = await Stations.findOne(stationId);
            if (!station) {
                throw new Error('Station not found');
            }
            await station.destroy();
        } catch (error) {
            throw new Error(`Error deleting station: ${error.message}`);
        }
    }
    async findStationById(stationId) {
        try {
            const station = await Stations.findByPk(stationId)
            if (!station) {
                throw new Error('Station not found');
            }
            await this.loadPlayersToStation(station)
            return station;
        } catch (error) {
            throw new Error(`Error finding station: ${error.message}`);
        }
    }
    async loadPlayersToStation(stationToFill) {
        var stationPlayers = await StationPlayers.findAll({
            where: {
                stationId: stationToFill.id
            }
        });
        stationToFill.dataValues.players = [];

        for (let stationIndex = 0; stationIndex < stationPlayers.length; stationIndex++) {
            const stationPlayer = stationPlayers[stationIndex];
            const player = await userService.findUserById(stationPlayer.userId)
            if (player) {
                stationToFill.dataValues.players.push(player)

            }
        }
    }

}

module.exports = new StationService();