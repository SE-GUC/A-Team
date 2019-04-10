const mongoose = require('mongoose')
const Schema = mongoose.Schema



const feedbackSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required:true
    },
    comment: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required:true //da msh 3ala heroku
    }
})
const responseSchema = new Schema({
    admin_id: {
        type: Schema.Types.ObjectId,
        required:true
    },
    response: {
        type: String,
        required: true
    },
    is_accepted: {
        type: Boolean,
        required:true //da msh 3ala heroku
    }
})



const applicationSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    applicant_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    is_accepted: {
        type: Boolean,
        required: false
    }
})

// Create the schema
const EventSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    remaining_places: {
        type: Number,
        required: true
    },
    name :{
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
    price: [{//array 
        type: Number,
        required: true
    }],
    speakers: [{
        type: String,
        required: true
    }],
    topics: [{
        type: String,
        required: true
    }],
    type: [{
        type:String,
        required:true
    }],
    partnerInitiated:{
        type: Schema.Types.ObjectId,
        required: true
    },
    status: { //gedeeda
        type: Boolean,
        required:true
    },
    is_private :{
        type:[String],
        enum:['PENDING_APPROVAL','APPROVED','ACCEPTING_APPLICANTS','SOLD_OUT','FINISHED'],
        required:true
    },
    attendees: [{
        type: Schema.Types.ObjectId
    }],
    time_of_edit:{
        type:String
    },
    feedbacks: [feedbackSchema],
    responses_from_admin:[responseSchema], //crud mat3amalsh
    applicants: [applicationSchema]
})

module.exports = Event = mongoose.model('Event', EventSchema)