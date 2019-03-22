const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const cosultancyAgencySchema = new Schema({
    //removed the ID from here, it's redundant since it's generated on it own -Amr
    info: {
        type: String,
        required: true
    },
    field_of_work: {
        type: String,
        required: true
    },
    board_members: [{
        type: String,
        required: true
    }],
    reports: [{
        type: String,
        required: true
    }]
})

module.exports = ConsultancyAgency = mongoose.model('ConsultancyAgency', cosultancyAgencySchema)