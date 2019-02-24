class Event
{
    constructor(id,remaining_places,organizer,location,about,price,speakers,topics,attendees_ids)
    {
        this.id=id;
        this.remaining_places=remaining_places;
        this.organizer=organizer;
        this.location=location;
        this.about=about;
        this.price=price;
        this.speakers=speakers;
        this.topics=topics;
        this.attendees_ids=attendees_ids;
    }
}
module.exports = Event