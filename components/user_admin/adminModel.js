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
  tipo:String,
  date: Date,
});

const adminModel = mongoose.model("admins", myschema);
module.exports = adminModel;