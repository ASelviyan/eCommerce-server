const mongoose = require("mongoose")

const WishlistSchema = new mongoose.Schema(
	{
		products: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Product",
			},
		],
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Wishlist", WishlistSchema)
