//require mongoose
const mongoose = require('mongoose');
//require schema
const Schema = mongoose.Schema;
// create user schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  age:Number,
},
  { timestamps: true },
  { collection: 'users' },

);

// export the model

module.exports = User = mongoose.model('user', userSchema);


