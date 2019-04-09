const mongoose = require('mongoose')
const Schema = mongoose.Schema
const typeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
})
module.exports = Type = mongoose.model('Type', typeSchema)

