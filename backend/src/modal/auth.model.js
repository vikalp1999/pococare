const mongoose = require('mongoose');
const userSchema = new  mongoose.Schema({
  name:{ 
    type: String
  },
  email: { 
    type: String,
     require: true,
     unique: true 
    },
  password: {
     type: String,
     require: true 
    },
});

const authModel = mongoose.model('user', userSchema);
module.exports = authModel;