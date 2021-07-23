const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myschema = new Schema({
  transmiter: {
    type: String,
    require: true,
  },
  receiver: {
    type: String,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  date: Date,
});

const holderModel = mongoose.model("transfers", myschema);
module.exports = holderModel;