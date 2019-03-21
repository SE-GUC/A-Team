const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Creating Schema
const Tasks_schema=new Schema({
    name: {
        type: String,
        required: true
    },
    time_of_post:{
        type: Date,
        required: true
    },
    time_of_review: {
        type:Date,
        required:false
    },
    monetary_compensation:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    time_of_assingment:{
        type:Date,
        required:false
    },
    is_assigned:{
        type:Boolean,
        required:false
    },
    assigned_id:{
        type:Schema.Types.ObjectId, //object zeft
        required:false
    },
    time_expected:{
        type:String,
        required:true
    },
    level_of_comitment:{
        type:String,
        required:true
    },
    is_reviewed:{
        type:Boolean,
        required:true
    },
    experience_needed:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    p_id:{
        type:Schema.Types.ObjectId, //object 5ara
        required:false,
    },
    skills:[{
        type: String,
        required: true
    }],
    response_from_admin:{
        type:String,
        required:false

    },
    admin_id:{
        type:Schema.Types.ObjectId, //object 5ara
        required:false
    },
    applicants:[{
    type:Schema.Types.ObjectId, //object
    required:false
    }]
})


module.exports = Task = mongoose.model('tasks', Tasks_schema)
