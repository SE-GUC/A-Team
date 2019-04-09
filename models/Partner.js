const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partnerSchema = new Schema({
  consultancy_agency_id: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  partners:[{
    type: String,
    required: true
  }],
  field_of_work:{
    type: String,
    required: true
  },
  past_projects:[{
    type: String,
    required: false
  }],
  board_members:[{
    type: String,
    required: false
  }],
  events:[{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }],
  feedback:[{
    type: String,
    required: false
  }],

});

module.exports= Partner = mongoose.model('partners', partnerSchema);