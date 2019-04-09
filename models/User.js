const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    location: { //place of birth w mayeb2ash OBJECTID aslun
        type: Schema.Types.ObjectId, //String 
        ref: 'Location', //eh el 5ara da
        required: false //true tab3an
    },
    eventsAttended: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    account_open_on: { //whats that?
        type: String,
        required: false
    }
    // lazm privacy of user
    // type of user 3ashan n3raf n recomend events
})

module.exports = User = mongoose.model('User', UserSchema)
