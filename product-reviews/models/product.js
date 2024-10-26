// models/product.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  availability: String,
  variations: [String], // e.g., color, size
  images: [String], // Array of image URLs
  reviews: [reviewSchema], // Array of reviews
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
