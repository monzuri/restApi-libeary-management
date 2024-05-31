const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  rating: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Books", BooksSchema);
