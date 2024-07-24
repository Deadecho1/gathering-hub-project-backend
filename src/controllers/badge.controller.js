const Badge = require('../models/Badge');
const BadgeService = require('../services/badge.service');

class BadgeController {
    constructor() {
    }

    async createBadge(req, res) {
        const { name } = req.body;
        await BadgeService.createBadge(name);
        return res.status(201).json(newBadge);
    }



    async deleteBadge(req, res) {
        const { badgeId } = req.params;

        return res.status(204).send();
    }

    async findBadgeById(req, res) {
        try {
            const { badgeId } = req.params;
            if (!badgeId || isNaN(badgeId)) {
                return res.status(400).json({ error: 'Invalid or missing badgeId parameter' });
            }

            const badge = await BadgeService.findBadgeById(badgeId);
            if (!badge) {
                return res.status(404).json({ error: 'Badge not found' });
            }
            return res.status(200).json(badge);
        } catch (error) {
            return res.status(500).json({ error: `Error finding badge: ${error.message}` });
        }
    }
    async getAllBadges(req, res) {
        try {
            const badges = await BadgeService.getAllBadges();

            return res.status(200).json(badges);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
}
module.exports = new BadgeController();
