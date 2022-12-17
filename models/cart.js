const mongoose = require("mongoose")

const SkuSchema = new mongoose.Schema({
	sku: { type: String, required: true },
})

const CartSchema = new mongoose.Schema(
	{
		products: [SkuSchema],
		total: {
			type: mongoose.Types.Decimal128,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Cart", CartSchema)
