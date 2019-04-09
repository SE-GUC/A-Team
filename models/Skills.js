const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SkillsSchema = new Schema({
    skill:{
        type:String,
        required:true
    }
})






module.exports = Skills = mongoose.model('Skills', SkillsSchema)