const AuthService = require('../services/auth.service');
const userService = require('../services/user.service');

class AuthController {
    constructor() {
    }

    async login(req, res) {
        try {

            const { username, password } = req.body;
            if ((!username || isNaN(username)) && (!password || isNaN(password))) {
                return res.status(400).json({ error: 'Invalid username or password' });
            }
            const user = await AuthService.login(username, password);
            if (!user) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }
            return res.status(201).json(user);
        }

        catch (error) {
            return res.status(500).json({ error: `Server error: ${error.message}` });
        }
    }
    async register(req, res) {
        try {
            const { username, name, password } = req.body;
            if (!username) {
                return res.status(400).json({ error: 'Invalid username' });
            }
            if (!name) {
                return res.status(400).json({ error: 'Invalid name' });
            }
            if (!password) {
                return res.status(400).json({ error: 'Invalid password' });
            }
            if (await userService.findUserByUsername(username)) {
                return res.status(400).json({ error: 'Username already exist' });
            }

            var newUser = await AuthService.register(name, username, password);
            return res.status(201).json(newUser);
        }

        catch (error) {
            return res.status(500).json({ error: `Server error: ${error.message}` });
        }
    }


}
module.exports = new AuthController();
