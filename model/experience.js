var mongoose = require('mongoose');

var experienceSchema = mongoose.Schema({
  title: { type: String, required: true },
  sub_title: { type: String, required: true },
  description: { type: String },
  start_time: { type: String },
  end_time: { type: String }
});
var Experience = mongoose.model('experience', experienceSchema);
module.exports = Experience
