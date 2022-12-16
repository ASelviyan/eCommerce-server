const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			enum: ["sword", "axe", "dagger", "mace", "spear", "war hammer"],
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: mongoose.Types.Decimal128,
			required: true,
		},
		image: [
			{
				type: String,
				required: true,
			},
		],
		preorder: {
			type: Boolean,
			required: true,
		},
		skew: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
		},
		onsale: {
			type: Boolean,
		},
		discount: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Product", ProductSchema)
