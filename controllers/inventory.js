const db = require("../models")
const router = require("express").Router()

// GET get all inventory
router.get("/", async (req, res) => {
	try {
		const foundInventory = await db.Inventory.find({})

		res.json(foundInventory)
	} catch (err) {
		console.warn(err)
	}
})

// GET a single item details thats in inventory
router.get("/:id", async (req, res) => {
	const id = req.params.id
	try {
		const foundItem = await db.Inventory.findOne({ products: { id: id } })

		res.json(foundItem)
	} catch (err) {
		console.warn(err)
	}
})

// POST add new item to inventory
router.post("/", async (req, res) => {
	try {
		const foundInventory = await db.Inventory.find({})
		const newProduct = await db.Product.create(req.body)

		foundInventory.items.push(newProduct)
		await foundInventory.save()
	} catch (err) {
		console.warn(err)
	}
})

// PUT adjust details on a single item in inventory
router.put("/", async (req, res) => {
	const inventoryId = req.body.inventoryId
	try {
		const updatedInventory = await db.Inventory.findOneAndUpdate(
			inventoryId,
			req.body,
			{
				new: true,
			}
		).populate({
			path: "products",
		})

		res.json(updatedInventory)
	} catch (err) {
		console.warn(err)
	}
})

module.exports = router
