class User {
    constructor(id, name, lvl, avatar, avatarBg, coordId) {
        this.id = id;
        this.name = name;
        this.lvl = lvl;
        this.avatar = avatar;
        this.avatarBg = avatarBg;
        this.coordId = coordId;
    }
}
module.exports = { User };
