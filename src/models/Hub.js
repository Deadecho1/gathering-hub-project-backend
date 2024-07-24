class Hub {
    constructor(id, name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, about, coordId, attendees) {
        this.id = id;
        this.name = name;
        this.badge = badge;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.mapCoordinates = mapCoordinates;
        this.location = location;
        this.rating = rating;
        this.phone = phone;
        this.avatar = avatar;
        this.about = about;
        this.coordId = coordId;
        this.attendees = attendees;
        this.stations = stations;
    }
}
module.exports = { Hub };




