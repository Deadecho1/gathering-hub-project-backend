class Hub {
    constructor(name, badge, openingHour, closingHour, mapCoordinates, location, rating, phone, avatar, logo, about,
        coordId, ownerId, attendees, stations, locationUrl, websiteUrl, reviews) {
        this.name = name;
        this.badge = badge;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
        this.mapCoordinates = mapCoordinates;
        this.location = location;
        this.rating = rating;
        this.phone = phone;
        this.avatar = avatar;
        this.logo = logo;
        this.about = about;
        this.coordId = coordId;
        this.attendees = attendees;
        this.stations = stations;
        this.ownerId = ownerId;
        this.locationUrl = locationUrl;
        this.websiteUrl = websiteUrl;
        this.reviews = reviews;
    }
}
module.exports = { Hub };


