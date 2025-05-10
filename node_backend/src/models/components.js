const mongoose = require("mongoose");

const componentsSchema = mongoose.Schema({
  code: { type: String },
  css: { type: String },
  tags: { type: [] },
  title: { type: String },
  subTitle: { type: String },
  data: { type: String },
  impNotes: { type: String },
});

const Components = mongoose.model("components", componentsSchema);

module.exports = Components;
