const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {type : String, required : true},
  description: String,
  price: {type : Number, min : [0, 'put valid min price'], max : [99, 'put valid max price']},
  discountPercentage: {type : Number, min : [0, 'put valid min discount'], max : [99, 'put valid max discount']},
  rating: Number,
  brand: {type : String, required : true},
  category: {type : String, required : true},
  thumbnail: {type : String, required : true},
  images: [String],
});

exports.Product = mongoose.model('Product', productSchema);

