const { Router } = require('express');
const StationController = require('../controllers/station.controller');

const stationRouter = Router();

stationRouter.post('/', StationController.createStation);


stationRouter.put('/:stationId', StationController.updateStation);

stationRouter.delete('/:stationId', StationController.deleteStation);

stationRouter.get('/:stationId', StationController.findStationById);


module.exports = stationRouter;