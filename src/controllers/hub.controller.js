const Hub = require('../models/Hub');
const HubService = require('../services/hub.service');

class HubController {
    constructor() {
    }

    async createHub(req, res) {
        try {
            const { id, name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, about, coordId, ownerId } = req.body;
            const newHub = new Hub(id, name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, about, coordId, ownerId);
            await HubService.createHub(newHub);
            return res.status(201).json(newHub);
        }
        catch (error) {
            return res.status(500).json({ error: `Error creating hub: ${error.message}` });
        }
    }

    async updateHub(req, res) {
        try {
            const { hubId } = req.params;
            if (!hubId || isNaN(hubId)) {
                return res.status(400).json({ error: 'Invalid or missing hubId parameter' });
            }
            const hubReference = await HubService.findHubById(hubId);

            if (!hubReference) {
                return res.status(404).json({ error: 'Hub not found' });
            }
            const { id, name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, about, coordId } = req.body;
            const hubToUpdate = { id, name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, about, coordId };
            await HubService.updateHub(hubToUpdate, hubReference);

            return res.status(200).json(hubToUpdate);
        }

        catch (error) {
            return res.status(500).json({ error: `Error updating hub: ${error.message}` });
        }
    }

    async deleteHub(req, res) {
        try {
            const { hubId } = req.params;
            if (!hubId || isNaN(hubId)) {
                return res.status(400).json({ error: 'Invalid or missing hubId parameter' });
            }
            const hubReference = await HubService.findHubById(hubId);
            if (!hubReference) {
                return res.status(404).json({ error: 'Hub not found' });
            }
            hubReference.destroy();
            return res.status(204).send();
        }

        catch (error) {
            return res.status(500).json({ error: `Error deleting hub: ${error.message}` });
        }
    }


    async findHubById(req, res) {
        try {
            const { hubId } = req.params;
            if (!hubId || isNaN(hubId)) {
                return res.status(400).json({ error: 'Invalid or missing hubId parameter' });
            }
            const hubReference = await HubService.findHubById(hubId);
            if (!hubReference) {
                return res.status(404).json({ error: 'Hub not found' });
            }
            return res.status(200).json(hubReference);
        } catch (error) {
            return res.status(500).json({ error: `Error finding user: ${error.message}` });
        }
    }
    async getAllHubs(req, res) {
        try {
            const hubs = await HubService.getAllHubs();

            return res.status(200).json(hubs);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
}
module.exports = new HubController();
