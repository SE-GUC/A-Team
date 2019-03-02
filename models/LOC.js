const uuid = require('uuid')

class LOC {
    constructor(title, location, capacity, booked) {
        this.title = title;
        this.location = location;
        this.capacity = capacity;
        this.booked = booked;
        this.id = uuid.v4();
    };
}

module.exports = LOC