const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    total: {
      type: mongoose.Types.Decimal128,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Cart', CartSchema)
