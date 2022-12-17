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
		sku: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
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

const InventorySchema = new mongoose.Schema(
	{
		items: [ProductSchema],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Inventory", InventorySchema)
