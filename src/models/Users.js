const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, lowercase: true , required: [true, "The email is required"], trim: true},
  email: { type: String, required: true, unique: [true, "This email already exits"], trim: true},
  password: {type: String, required: true, trim: true, trim: true},
});

module.exports = mongoose.model("Usuario", ClientSchema)