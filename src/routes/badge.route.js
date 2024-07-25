const { Router } = require('express');
const BadgeController = require('../controllers/badge.controller');

const badgeRouter = Router();

badgeRouter.post('/', BadgeController.createBadge);

badgeRouter.get('/all-badges', BadgeController.getAllBadges);

badgeRouter.get('/:badgeId', BadgeController.findBadgeById);


module.exports = badgeRouter;