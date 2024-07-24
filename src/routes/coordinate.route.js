const { Router } = require('express');
const CoordinateController = require('../controllers/coordinate.controller');

const coordinateRouter = Router();

coordinateRouter.post('/', CoordinateController.createCoordinate);

coordinateRouter.get('/all-users', CoordinateController.getAllUserCoordinates);

coordinateRouter.get('/all-hubs', CoordinateController.getAllHubCoordinates);


coordinateRouter.get('/hub/:hubId', CoordinateController.findCoordinateByHubId);

coordinateRouter.get('/user/:userId', CoordinateController.findCoordinateByUserId);

coordinateRouter.put('/:coordinateId', CoordinateController.updateCoordinate);

coordinateRouter.delete('/:coordinateId', CoordinateController.deleteCoordinate);

coordinateRouter.get('/:coordinateId', CoordinateController.findCoordinateById);





module.exports = coordinateRouter;