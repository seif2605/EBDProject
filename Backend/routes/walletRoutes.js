const express = require("express");
const router = express.Router();

// Authentication middleware
const auth = require("../middleware/authMiddleware");

// Import wallet helper functions (make sure file name is EXACT)
const {
  getBalance,
  addMoney,
  withdrawMoney,
} = require("../helpers/wallethelper");   // ✔ CORRECT

// ROUTES
router.get("/balance", auth, getBalance);
router.post("/add", auth, addMoney);
router.post("/withdraw", auth, withdrawMoney);

module.exports = router;
