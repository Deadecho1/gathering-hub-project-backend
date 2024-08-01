const { Badges } = require('../data-access/Badges');
const { UserBadges } = require('../data-access/UserBadges');
const { UserFriends } = require('../data-access/UserFriends');
const { Users } = require('../data-access/Users');

class UserService {
    constructor() {
    }

    async updateUser(userToUpdate, userReference) {
        try {
            return await userReference.update(userToUpdate);
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    async deleteUser(userId) {
        try {
            const user = await Users.findOne(userId);
            if (!user) {
                throw new Error('User not found');
            }
            await user.destroy();
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
    async findUserById(userId) {
        try {
            const user = await Users.findByPk(userId)
            if (!user) {
                throw new Error('User not found');
            }
            await this.loadFriendsToUser(user);
            await this.loadBadgesToUser(user);

            return user;
        } catch (error) {
            throw new Error(`Error finding user: ${error.message}`);
        }
    }
    async findUserByUsername(username) {
        try {
            const user = await Users.findOne({
                where: {
                    username: username
                }
            });
            if (!user) {
                return null;
            }
            await this.loadFriendsToUser(user);
            await this.loadBadgesToUser(user);

            return user;
        } catch (error) {
            throw new Error(`Error finding user: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            const users = await Users.findAll();
            for (let usersIndex = 0; usersIndex < users.length; usersIndex++) {
                await this.loadFriendsToUser(users[usersIndex]);
                await this.loadBadgesToUser(users[usersIndex]);
            }
            return users;
        } catch (error) {
            throw new Error(`Error finding users: ${error.message}`);
        }
    }

    async loadFriendsToUser(userToFill) {
        try {
            const friends = await UserFriends.findAll({
                where: {
                    userId: userToFill.id
                }
            });
            userToFill.dataValues.friends = friends.map(friend => friend.friendId)
        } catch (error) {
            throw new Error(`Error finding friends: ${error.message}`);
        }
    }
    async loadBadgesToUser(userToFill) {
        try {
            const userBadges = await UserBadges.findAll({
                where: {
                    userId: userToFill.id
                }
            });

            userToFill.dataValues.badges = [];

            for (const userBadge of userBadges) {
                const badge = await Badges.findByPk(userBadge.badgeId);
                if (badge) {
                    userToFill.dataValues.badges.push(badge.name);
                }
            }
        } catch (error) {
            throw new Error(`Error finding badges: ${error.message}`);
        }
    }
    async addFriend(userId, friendId) {
        try {
            return await UserFriends.create({
                userId: parseInt(userId),
                friendId: friendId,
            });
        } catch (error) {
            throw new Error(`Error finding friends: ${error.message}`);
        }
    }


}

module.exports = new UserService();