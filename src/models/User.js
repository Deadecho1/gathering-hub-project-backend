class User {
    constructor(id, name, username, lvl, avatar, avatarBg, coordId, friends, about) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.lvl = lvl;
        this.avatar = avatar;
        this.avatarBg = avatarBg;
        this.coordId = coordId;
        this.friends = friends;
        this.about = about;
    }
}
module.exports = { User };
