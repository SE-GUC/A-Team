const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const cosultancyAgencySchema = new Schema({
    _id :{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
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