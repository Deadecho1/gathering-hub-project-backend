class Station {
    constructor(stationId, platform, game, maxPlayers, currPlayers, players) {
        this.stationId = stationId;
        this.platform = platform;
        this.game = game;
        this.maxPlayers = maxPlayers;
        this.currPlayers = currPlayers;
        this.players = players;
    }
}
module.exports = { Station };
