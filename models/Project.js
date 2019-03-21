const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Task = mongoose.model('tasks')

const ProjectSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    project_name:{
        type:String,
        required:true
    },
    date_Posted:{
        type:Date,
        required:true
    },
    partner_responsible:{
        type: Number,
        required:true
    },
    consultancy_agency_sponsor:{
        type:Number,
        required:false
        
    },
    Tasks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'tasks'
    }]

})
module.exports=project= mongoose.model('Project', ProjectSchema)