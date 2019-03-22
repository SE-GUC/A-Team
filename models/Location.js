
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



//class LOC {
//    constructor(title, location, capacity, booked) {
//        this.title = title;
//        this.location = location;
//        this.capacity = capacity;
//        this.booked = booked;
//        
//    };
//}

//module.exports = LOC