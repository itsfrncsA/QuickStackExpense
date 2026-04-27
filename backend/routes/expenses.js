const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getSummary,
} = require('../controllers/expenseController');

// Apply auth middleware to all routes
router.use(auth);

// Define routes
router.get('/', getExpenses);
router.post('/', createExpense);
router.get('/summary', getSummary);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;