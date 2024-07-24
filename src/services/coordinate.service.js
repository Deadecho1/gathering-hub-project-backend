const { Op } = require('sequelize');
const { Coordinates } = require('../data-access/Coordinates');

const Coordinate = require('../models/coordinate');

class CoordinateService {
    constructor() {
    }

    async createCoordinate({ name, lvl, avatar, avatarBg, coordId }) {
        try {
            const newCoordinate = new Coordinate(name, lvl, avatar, avatarBg, coordId);
            await Coordinates.create(newCoordinate);
            return newCoordinate;
        } catch (error) {
            throw new Error(`Error creating coordinate: ${error.message}`);
        }
    }

    async updateCoordinate(coordinateToUpdate, coordinateReference) {
        try {
            await coordinateReference.update(coordinateToUpdate);
        } catch (error) {
            throw new Error(`Error updating coordinate: ${error.message}`);
        }
    }

    async deleteCoordinate(coordinateId) {
        try {
            const coordinate = await Coordinates.findOne(coordinateId);
            if (!coordinate) {
                throw new Error('Coordinate not found');
            }
            await coordinate.destroy();
        } catch (error) {
            throw new Error(`Error deleting coordinate: ${error.message}`);
        }
    }
    async findCoordinateById(coordinateId) {
        try {
            const coordinate = await Coordinates.findByPk(coordinateId)
            if (!coordinate) {
                throw new Error('Coordinate not found');
            }
            return coordinate;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
    async findCoordinateByUserId(userId) {
        try {
            const coordinate = await Coordinates.findOne({
                where: {
                    userId: userId
                }
            });
            if (!coordinate) {
                throw new Error('Coordinate not found');
            }
            return coordinate;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
    async findCoordinateByHubId(hubId) {
        try {
            const coordinate = await Coordinates.findOne({
                where: {
                    hubId: hubId
                }
            }); if (!coordinate) {
                throw new Error('Coordinate not found');
            }
            return coordinate;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
    async getAllUserCoordinates() {
        try {
            const coordinates = await Coordinates.findAll({
                where: {
                    userId: {
                        [Op.not]: null
                    }
                }
            });

            return coordinates;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
    async getAllHubCoordinates() {
        try {
            const coordinates = await Coordinates.findAll({
                where: {
                    hubId: {
                        [Op.not]: null
                    }
                }
            });

            return coordinates;
        } catch (error) {
            throw new Error(`Error finding coordinate: ${error.message}`);
        }
    }
}

module.exports = new CoordinateService();