const mongoose = require("mongoose")

const InventorySchema = new mongoose.Schema(
	{
		products: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Inventory", InventorySchema)
