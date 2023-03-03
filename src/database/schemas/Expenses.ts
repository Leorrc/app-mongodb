import mongoose from 'mongoose'

const Expenses = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    select: false,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Expenses', Expenses)
