const User = require("../models/User");

// GET WALLET BALANCE
exports.getBalance = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("balance");
    res.json({ balance: user.balance });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ADD MONEY
exports.addMoney = async (req, res) => {
  try {
    const { amount } = req.body;
    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be > 0" });
    }

    const user = await User.findById(req.user.id);
    user.balance += amount;
    await user.save();

    res.json({ message: "Money added", balance: user.balance });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// WITHDRAW MONEY
exports.withdrawMoney = async (req, res) => {
  try {
    const { amount } = req.body;
    if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be > 0" });
    }

    const user = await User.findById(req.user.id);

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    user.balance -= amount;
    await user.save();

    res.json({ message: "Money withdrawn", balance: user.balance });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
