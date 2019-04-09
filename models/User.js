const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    type: {
        type:[String],
        enum:['CA','P','M'],
        required:false
    },
    user_name:{
        type:String,
        required:false
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
    date_of_birth: {
        type: String, //Moment in Back end or Handle as a Calendar in front end
        required: true
    },
    phone: {
        type: String, //3shan mafrood y2ba feeh zero dek awal
        required: true
    },
    events_attended: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false
    }],
    is_private: {
        type: Boolean,
        required:true
    },
    // interests: ,

    //stuff of CA
    info: {
        type: String,
        required: false
    },
    field_of_work: [{ //that's shared between partners and CAs
        type: String,
        required: false
    }],
    board_members: [{ //that's shared between partners and CAs
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
    events_created:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref:'Event'
    }]    
})

module.exports = User = mongoose.model('User', UserSchema)
