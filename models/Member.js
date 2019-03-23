const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MemberSchema = new Schema({
   
    years_of_experience:{
        type:Number,
        required: true
    },skills:[{
        type:String,
        required:true
    }],
    interests:[{
        type:String,
        required:true
    }],
    notifications:[{
        type:Number,
        required:true
    }]
})


module.exports = Members = mongoose.model('Member', MemberSchema)

