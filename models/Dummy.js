const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schm = new Schema({
    name:{
        type:String,
        required:true,
    }
})
module.exports= Dummy=mongoose.model('dummy',schm)