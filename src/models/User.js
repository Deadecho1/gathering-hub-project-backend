class User {
    constructor(id, name, username, lvl, avatar, avatarBg, coordId, friends) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.lvl = lvl;
        this.avatar = avatar;
        this.avatarBg = avatarBg;
        this.coordId = coordId;
        this.friends = friends;
    }
}
module.exports = { User };
