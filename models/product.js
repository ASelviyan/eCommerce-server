const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: mongoose.Types.Decimal128,
    },
    image: [
      {
        type: String,
      },
    ],
    preorder: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Product', ProductSchema)
