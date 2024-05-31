const Loan = require("../models/Loan");
const createLoan = async (req, res) => {
  try {
    const { book, issueDate, returnDate, returned } = req.body;
    const userID = req.userID;
    const loan = new Loan({
      user: userID,
      book,
      issueDate,
      returnDate,
      returned,
    });
    const newLoan = await loan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllLoans = async (req, res) => {
  try {
    const Loans = await Loan.find();
    res.json(Loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLoan = async (req, res) => {
  try {
    const Loan = await Loan.findById(req.params.id);
    if (!Loan) {
      return res.status(404).json({ message: "Loan not found" });
    }
    res.json(Loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLoan = await Loan.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedLoan) {
      return res.status(404).json({ message: "Loan not found" });
    }
    res.json(updatedLoan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteLoan = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLoan = await Loan.findByIdAndDelete(id);
    if (!deletedLoan) {
      return res.status(404).json({ message: "Loan not found" });
    }
    res.json({ message: "Loan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLoan,
  getAllLoans,
  getLoan,
  updateLoan,
  deleteLoan,
};
