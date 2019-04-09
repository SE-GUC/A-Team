
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const LOCSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    booked: {
        type: String,
        required: true
    }    
})

module.exports = Location = mongoose.model('Location', LOCSchema)
