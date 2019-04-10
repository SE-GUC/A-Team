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
        type:String,
        required:true
    },
    partner_responsible:{
        type: Schema.Types.ObjectId, //make object 5ara
        required:true,
        ref:'User'
    },
<<<<<<< HEAD
    consultancy_agency_assigned:{
=======
    consultancy_agency_assinged:{
>>>>>>> bcfdb30ab8843686f30689d5bb9a44132d32452b
        type:Schema.Types.ObjectId,
        required:false,
        ref:'User'    
    },
    skills: [{
        type: String,
<<<<<<< HEAD
        required: false
                //will be changed to objects later on 
=======
        required: true,
        enum:['Java','Html5','Css']
        //will be changed to objects later on 
>>>>>>> bcfdb30ab8843686f30689d5bb9a44132d32452b
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