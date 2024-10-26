// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.use('/product', productRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
