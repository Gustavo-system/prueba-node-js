const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myschema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  last_name: String,
  age: String,
  cuenta: Number,
  tipo:String,
  date: Date,
});

const holderModel = mongoose.model("holder", myschema);
module.exports = holderModel;
