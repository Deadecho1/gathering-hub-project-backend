const { Users } = require("../data-access/Users");
const { User } = require("../models/User");
const userService = require("./user.service");


class AuthService {
    constructor() {
    }
    async login(username, password) {
        try {
            const user = await userService.findUserByUsername(username)
            if (!user) {
                return null
            }
            if (user.password !== password) {
                return null;
            }
            return user;
        } catch (error) {
            throw new Error(`Login Error : ${error.message}`);
        }

    }

    async register(name, username, password) {
        try {
            const newUser = await Users.create({ username: username, name: name, lvl: 0, avatar: "hero", avatarBg: "city-night", password: password, role: "user", about: `Hi! It's me!!` });
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }




}

module.exports = new AuthService();