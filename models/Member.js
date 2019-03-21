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
    }]
})

module.exports = Member = mongoose.model('Member', MemberSchema)
module.exports=Member