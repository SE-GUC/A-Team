const mongoose = require('mongoose')
const Schema = mongoose.Schema



//autoIncrement.initialize(connection);

const partnerSchema = new Schema({
  consultancy_agency_id: { type: Schema.Types.ObjectId }
});

//partnerSchema.plugin(autoIncrement.plugin, 'Partner');
//bookSchema.plugin(autoIncrement.plugin, { model: 'Partner', field: 'consultancy_agency_id' });

module.exports= Partner = connection.model("Partner", partnerSchema);
