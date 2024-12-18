// app.js
const express = require('express');
const mongoose = require('mongoose');
const complaintRoutes = require('./routes/complaint'); // Import complaint routes
const cartRoutes = require('./routes/cart'); // Import cart routes
const app = express();

app.use(express.json()); // Middleware for parsing JSON

// Connect to MongoDB
mongoose.connect('mongodb+srv://ecommerce:ecommerce@ecommerce.dunf0.mongodb.net/')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use complaint routes
app.use('/complaints', complaintRoutes);
app.use('/cart', cartRoutes);

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
