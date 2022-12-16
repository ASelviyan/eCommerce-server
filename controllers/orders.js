const db = require("../models")
const router = require("express").Router()

// GET a single order
router.get("/:id", async (req, res) => {
	const id = req.params.id
	try {
		const foundOrder = await db.Order.findById(id)

		res.json(foundOrder)
	} catch (err) {
		console.warn(err)
	}
})

// POST add new order to list
router.post("/", async (req, res) => {
	const userId = req.body.userId
	try {
		const newOrder = await db.Order.create(req.body)
		const foundUser = await db.User.findById(userId)
		newOrder.user = foundUser
		foundUser.orders.push(newOrder)

		await newOrder.save()
		await foundUser.save()

		res.json(foundUser)
	} catch (err) {
		console.warn(err)
	}
})

module.exports = router
