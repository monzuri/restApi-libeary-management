// models/Loan.js
const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Books",
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  returned: {
    type: Boolean,
    default: false,
  },
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
