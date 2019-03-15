const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const EventSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    remaining_places: {
        type: Number,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    about: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    speakers: [{
        type: String,
        required: true
    }],
    topics: [{
        type: String,
        required: true
    }],
    type: {
        type: String,
        required: true
    },
    attendees: [{
        type: Schema.Types.ObjectId
    }],
    feedbacks: [{
        type: Schema.Types.ObjectId, //user id then we want another thing here for the feedback itself
        //hena kda dunno how
    }],
    applicants: [{
        type: Schema.Types.ObjectId, //user id then we want another thing here for the boolean isAccepted
        //hena kda dunno how
    }]
})

module.exports = Event = mongoose.model('events', EventSchema)