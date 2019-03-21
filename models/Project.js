const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Task= require('./Task')
const task_schema=mongoose.model('tasks').schema

const ProjectSchema = new Schema({
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
    Tasks:{
        type: [Schema.Types.ObjectId], 
        ref: 'tasks'
    }

})
module.exports=project= mongoose.model('Project', ProjectSchema)