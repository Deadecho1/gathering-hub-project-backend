
const { Badges } = require('../data-access/Badges');
const Badge = require('../models/Badge');

class BadgeService {
    constructor() {
    }

    async createBadge({ name }) {
        try {
            const newBadge = new Badge(name);
            await Badges.create(newBadge);
            return newBadge;
        } catch (error) {
            throw new Error(`Error creating badge: ${error.message}`);
        }
    }



    async deleteBadge(badgeId) {
        try {
            const badge = await Badges.findOne(badgeId);
            if (!badge) {
                throw new Error('Badge not found');
            }
            await badge.destroy();
        } catch (error) {
            throw new Error(`Error deleting badge: ${error.message}`);
        }
    }
    async findBadgeById(badgeId) {
        try {
            const badge = await Badges.findByPk(badgeId)
            if (!badge) {
                throw new Error('Badge not found');
            }
            await this.loadFriendsToBadge(badge);
            await this.loadBadgesToBadge(badge);

            return badge;
        } catch (error) {
            throw new Error(`Error finding badge: ${error.message}`);
        }
    }

    async getAllBadges() {
        try {
            const badges = await Badges.findAll();

            return badges;
        } catch (error) {
            throw new Error(`Error finding badges: ${error.message}`);
        }
    }

}

module.exports = new BadgeService();