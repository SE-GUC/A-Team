const mongoose = require('mongoose')
const Schema = mongoose.Schema


const feedbackSchema = new Schema({
    user_id: {
        type: Number,
        required:true
    },
    comment: {
        type: String,
        required: true
    }
})

const applicationSchema = new Schema({
    applicant_id: {
        type: Schema.Types.ObjectId,
        required:true
    },
    isAccepted: {
        type: Boolean,
        required: true
    }
})

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
    partnerInitiated:{
        type: Schema.Types.ObjectId,
        required: true
    },
    attendees: [{
        type: Schema.Types.ObjectId
    }],
    feedbacks: [feedbackSchema],
    applicants: [applicationSchema]
})

module.exports = Event = mongoose.model('events', EventSchema)