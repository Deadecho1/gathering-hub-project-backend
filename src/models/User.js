class User {
    constructor(id, name, lvl, avatar, avatarBg, coordId, friends) {
        this.id = id;
        this.name = name;
        this.lvl = lvl;
        this.avatar = avatar;
        this.avatarBg = avatarBg;
        this.coordId = coordId;
        this.friends = friends;
    }
}
module.exports = { User };
