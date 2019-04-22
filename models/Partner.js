const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partnerSchema = new Schema({
  field_of_work:[{
    type: String,
    required: true
  }],
  past_projects:[{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'Project'
  }],
  board_members:[{
    type: String,
    required: false
  }],
  events_attended:[{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'Event'
  }],
  events_created:[{
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref:'Event'
  }],
  feedback:[{
    type: String,
    required: false
  }],

});

module.exports= Partner = mongoose.model('partners', partnerSchema);