// routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Get Product Details
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Add a Review
router.post('/:id/review', async (req, res) => {
  const product = await Product.findById(req.params.id);
  product.reviews.push(req.body);
  await product.save();
  res.json({ success: true });
});

// Get Product Reviews
router.get('/:id/reviews', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product.reviews);
});

module.exports = router;
