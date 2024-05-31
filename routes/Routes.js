const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook,
} = require("../controller/Books.js");
const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/Category.js");
const {
  createLoan,
  getAllLoans,
  getLoan,
  updateLoan,
  deleteLoan,
} = require("../controller/Loan.js");
const {
  registerUser,
  loginUser,
  refetchUser,
  logoutUser,
  updateUser,
  deleteUser,
  getUser,
  registerAdmin,
} = require("../controller/User.js");
const { verifyToken } = require("../middleware/verifyToken.js");
const isAdmin = require("../middleware/IsAdmin.js");
router.post("/book", verifyToken, isAdmin, createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", verifyToken, isAdmin, createBook);
router.put("/books/:id", verifyToken, isAdmin, updateBook);
router.delete("/books/:id", verifyToken, isAdmin, deleteBook);

router.post("/category", verifyToken, isAdmin, createCategory);
router.get("/categories", getAllCategories);
router.get("/category/:id", verifyToken, getCategory);
router.put("/category/:id", verifyToken, isAdmin, updateCategory);
router.delete("/category/:id", verifyToken, isAdmin, deleteCategory);

router.post("/register", registerUser);
router.post("/admin", registerAdmin);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/refetch", refetchUser);
router.put("/user/:id", verifyToken, isAdmin, updateUser);
router.delete("/user/:id", verifyToken, isAdmin, deleteUser);
router.get("/user/:id", verifyToken, isAdmin, getUser);

router.post("/loan", verifyToken, createLoan);
router.get("/loans", verifyToken, getAllLoans);
router.get("/loan/:id", verifyToken, getLoan);
router.put("/loan/:id", verifyToken, isAdmin, updateLoan);
router.delete("/loan/:id", verifyToken, isAdmin, deleteLoan);

module.exports = router;
