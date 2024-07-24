const { Router } = require('express');
const HubController = require('../controllers/hub.controller');

const hubRouter = Router();

hubRouter.post('/', HubController.createHub);

hubRouter.get('/all-hubs', HubController.getAllHubs);


hubRouter.put('/:hubId', HubController.updateHub);

hubRouter.delete('/:hubId', HubController.deleteHub);

hubRouter.get('/:hubId', HubController.findHubById);

module.exports = hubRouter;