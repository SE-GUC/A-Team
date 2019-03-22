const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autoIncrement = require("mongoose-auto-increment");
mongoose.connect("mongodb://localhost/test");

mongoose.connection
  .once("open", function() {
    console.log("connection has been made");
  })
  .on("error", function(error) {
    console.log("connection error ", error);
  });

//autoIncrement.initialize(connection);

const partnerSchema = new Schema({
  consultancy_agency_id: { type: Schema.Types.ObjectId }
});

//partnerSchema.plugin(autoIncrement.plugin, 'Partner');
//bookSchema.plugin(autoIncrement.plugin, { model: 'Partner', field: 'consultancy_agency_id' });

var Partner = connection.model("Partner", partnerSchema);
