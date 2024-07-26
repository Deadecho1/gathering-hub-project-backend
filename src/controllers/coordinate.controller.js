const CoordinateService = require('../services/coordinate.service');

class CoordinateController {
    constructor() {
    }

    async createCoordinate(req, res) {
        try {
            const { longitude, latitude } = req.body;
            await CoordinateService.createCoordinate(longitude, latitude);
            return res.status(201).json(newCoordinate);
        } catch (error) {
            return res.status(500).json({ error: `Error creating coordinate: ${error.message}` });
        }

    }

    async updateCoordinate(req, res) {
        const { coordinateId } = req.params;
        const coordinateReference = await CoordinateService.findCoordinateById(coordinateId);

        if (!coordinateReference) {
            return res.status(404).json({ error: 'Coordinate not found' });
        }
        const { name, lvl, avatar, avatarBg, coordId } = req.body;
        const coordinateToUpdate = { name, lvl, avatar, avatarBg, coordId };
        await CoordinateService.updateCoordinate(coordinateToUpdate, coordinateReference);

        return res.status(200).json(coordinateToUpdate);
    }


    async findCoordinateById(req, res) {
        try {
            const { coordinateId } = req.params;
            if (!coordinateId || isNaN(coordinateId)) {
                return res.status(400).json({ error: 'Invalid or missing coordinateId parameter' });
            }

            const coordinate = await CoordinateService.findCoordinateById(coordinateId);
            if (!coordinate) {
                return res.status(404).json({ error: 'Coordinate not found' });
            }
            return res.status(200).json(coordinate);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
    async findCoordinateByUserId(req, res) {
        try {
            const { userId } = req.params;
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: 'Invalid or missing userId parameter' });
            }

            const coordinate = await CoordinateService.findCoordinateById(coordinateId);
            if (!coordinate) {
                return res.status(404).json({ error: 'Coordinate not found' });
            }
            return res.status(200).json(coordinate);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
    async findCoordinateById(req, res) {
        try {
            const { coordinateId } = req.params;
            if (!coordinateId || isNaN(coordinateId)) {
                return res.status(400).json({ error: 'Invalid or missing coordinateId parameter' });
            }

            const coordinate = await CoordinateService.findCoordinateById(coordinateId);
            if (!coordinate) {
                return res.status(404).json({ error: 'Coordinate not found' });
            }
            return res.status(200).json(coordinate);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
    async findCoordinateByHubId(req, res) {
        try {
            const { hubId } = req.params;
            if (!hubId || isNaN(hubId)) {
                return res.status(400).json({ error: 'Invalid or missing hubId parameter' });
            }

            const coordinate = await CoordinateService.findCoordinateByHubId(hubId);
            if (!coordinate) {
                return res.status(404).json({ error: 'Coordinate not found' });
            }
            return res.status(200).json(coordinate);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }

    async getAllUserCoordinates(req, res) {
        try {
            const coordinates = await CoordinateService.getAllUserCoordinates();

            return res.status(200).json(coordinates);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
    async getAllHubCoordinates(req, res) {
        try {
            const coordinates = await CoordinateService.getAllHubCoordinates();

            return res.status(200).json(coordinates);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
}
module.exports = new CoordinateController();
