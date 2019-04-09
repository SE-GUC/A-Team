const mongoose = require('mongoose')
const Schema = mongoose.Schema
const interests =require('./Type')

// Create the schema
const UserSchema = new Schema({
    type: {
        //dunno lessa

    },
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
    events_attended: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }],
    is_private: {
        type: Boolean,
        required:true
    },
    interests: {
        interests
    },

    //stuff of CA
    info: {
        type: String,
        required: false
    },
    field_of_work: [{ //that's shared between partners and CAs
        type: String,
        required: false
    }],
    board_members: [{
        name: String,
        email: String,
        job_title:String
    }],
    reports: [{
        type: String,
        required: false
    }],



    //stuff of member
    years_of_experience:{
        type:Number,
        required: false
    },
    skills:[{
        type:String,
        required: false
    }],
    notifications:[{
        type:Number,
        required: false 
    }],



    //partner stuff
    past_projects:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'Project'
    }],
    board_members:[{
        type: String,
        required: false
    }],
    events_created:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'Event'
    }]    
})

module.exports = User = mongoose.model('User', UserSchema)
