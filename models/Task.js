const mongoose = require('mongoose')
const Schema = mongoose.Schema
//Creating Schema
const Tasks_schema=new Schema({
   
    name: {
        type: String,
        required: true
    },
    time_of_post:{
        type: String,   //will use moment
        required: true
    },
    time_of_review: {
        type:String,   //will use moment
        required:false
    },
    monetary_compensation:{
        type:Number,        // da howa howa price..my bad
        required:true
    },
    time_of_assingment:{
        type:Date,
        required:false
    },
    status:{ //admin
        type:String,    //Pending means just submitted, approved means admin 
        enum:['Pending','Approved','Accepting','Assigned','Closed','Finished'],
        default:'Pending',
        required:false,

    },
    assigned_id:{
        type:Schema.Types.ObjectId, //Assigned State
        required:false,
        ref:'User'

    },
    time_expected:{
        type:String,               // x years/months/days/hours
        required:true
    },
    level_of_comitment:{
        type:String,
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
    partner_id:{
        type:Schema.Types.ObjectId, //object 5ara
        required:false,
        ref:'User' //can add the whole partner here
    },
    skills:[{
        type: String,
        required: false,
        //will be changed to objects later on
    }],
    response_from_admin:[{
        type:String,
        required:false

    }],
    admin_id:{
        type:Schema.Types.ObjectId, //object 5ara
        required:false,
        ref:'Admin'
        //to refer to admin entity later on
    },
    applicants:[{
        type:Schema.Types.ObjectId, //object
        required:false,
        ref:'User'
    }]
    //do we need to add a category?
})


module.exports = Task = mongoose.model('tasks', Tasks_schema)
