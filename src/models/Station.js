class Station {
    constructor(stationName, platform, game, maxPlayers, currPlayers, players, hubId) {
        this.stationName = stationName;
        this.platform = platform;
        this.game = game;
        this.maxPlayers = maxPlayers;
        this.currPlayers = currPlayers;
        this.players = players;
        this.hubId = hubId;
    }
}
module.exports = { Station };
