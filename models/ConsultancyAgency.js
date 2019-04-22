const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const cosultancyAgencySchema = new Schema({
    //removed the ID from here, it's redundant since it's generated on it own d-Amr
    info: {
        type: String,
        required: true
    },
    field_of_work: [{
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
    }]
})

module.exports = ConsultancyAgency = mongoose.model('ConsultancyAgency', cosultancyAgencySchema)