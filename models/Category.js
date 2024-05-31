const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the Category entity
const categorySchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number, // Changed to numeric type
    required: true,
    min: 0, // Added validation for minimum value
    max: 5, // Added validation for maximum value
  },
});

// Export the model for the "Category" collection
module.exports = mongoose.model("Category", categorySchema);
