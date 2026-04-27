const Expense = require('../models/Expense');

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create expense
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date, description } = req.body;

    const expense = new Expense({
      user: req.user.id,
      title,
      amount,
      category,
      date,
      description,
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(updatedExpense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await expense.deleteOne();
    res.json({ message: 'Expense removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get summary
const getSummary = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    
    const byCategory = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);
    
    const recentTotal = expenses
      .filter(exp => new Date(exp.date) >= last30Days)
      .reduce((sum, exp) => sum + exp.amount, 0);

    res.json({ total, byCategory, recentTotal, count: expenses.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary,
};