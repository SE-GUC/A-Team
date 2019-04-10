const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    project_name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date_Posted:{
        type:Date,
        required:true
    },
    partner_responsible:{
        type: Schema.Types.ObjectId, //make object 5ara
        required:true,
        ref:'User'
    },
    consultancy_agency_assinged:{
        type:Schema.Types.ObjectId,
        required:false,
        ref:'User'    
    },
    skills: [{
        type: String,
        required: true,
        enum:['Java','Html5','Css']
        //will be changed to objects later on
    }],
    consultancy_agency_applicants:{
        type:[Schema.Types.ObjectId],
        required:false,
        ref:'User'
    },
    tasks:{
        type: [Schema.Types.ObjectId], 
        ref: 'tasks',
        required:false
    
    }

})
module.exports=project= mongoose.model('Project', ProjectSchema)