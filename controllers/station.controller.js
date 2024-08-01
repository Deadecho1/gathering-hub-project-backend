const StationService = require('../services/station.service');

class StationController {
    constructor() {
    }

    async createStation(req, res) {
        try {
            const { stationName, platform, game, maxPlayers, currPlayers, hubId } = req.body;
            const newStation = await StationService.createStation(stationName, platform, game, maxPlayers, currPlayers, [], hubId);
            return res.status(201).json(newStation);
        }

        catch (error) {
            return res.status(500).json({ error: `Error creating station: ${error.message}` });
        }
    }

    async updateStation(req, res) {
        try {
            const { stationId } = req.params;
            const stationReference = await StationService.findStationById(stationId);

            if (!stationReference) {
                return res.status(404).json({ error: 'Station not found' });
            }
            const { name, lvl, avatar, avatarBg, coordId } = req.body;
            const stationToUpdate = { name, lvl, avatar, avatarBg, coordId };
            await StationService.updateStation(stationToUpdate, stationReference);

            return res.status(200).json(stationToUpdate);
        }

        catch (error) {
            return res.status(500).json({ error: `Error updating station: ${error.message}` });
        }
    }

    async deleteStation(req, res) {
        try {
            const { stationId } = req.params;
            return res.status(204).send();
        }

        catch (error) {
            return res.status(500).json({ error: `Error deleting station: ${error.message}` });
        }
    }

    async findStationById(req, res) {
        try {
            const { stationId } = req.params;
            if (!stationId || isNaN(stationId)) {
                return res.status(400).json({ error: 'Invalid or missing stationId parameter' });
            }

            const station = await StationService.findStationById(stationId);
            if (!station) {
                return res.status(404).json({ error: 'Station not found' });
            }
            return res.status(200).json(station);
        } catch (error) {
            return res.status(500).json({ error: `Error finding station: ${error.message}` });
        }
    }

}
module.exports = new StationController();
