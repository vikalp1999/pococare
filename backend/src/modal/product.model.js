const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  dosage: { type: Number, require: true },
  description: { type: String, require: true },
  Price:{type: Number, require: true}
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
