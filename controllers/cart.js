const db = require("../models")
const router = require("express").Router()

// POST clear cart
router.post("/", async (req, res) => {
	try {
		const foundUser = await db.User.findById(req.body.id)

		const newCart = await db.Cart.create({})

		foundUser.cart = newCart
		newCart.user = foundUser

		await foundUser.save()
		await newCart.save()
	} catch (err) {
		console.warn(err)
	}
})

router.delete("/", async (req, res) => {
	const userId = req.body.userId
	try {
		await db.Cart.findOneAndDelete({ user: userId })

		res.sendStatus(204)
		res.send({ msg: "Cart has been deleted" })
	} catch (err) {
		console.warn(err)
	}
})

// PUT adjust items in cart
router.put("/", async (req, res) => {
	const userId = req.body.userId
	try {
		const foundCart = await db.Cart.findOne({ user: userId })
		foundCart = req.body

		await foundCart.save()
	} catch (err) {
		console.warn(err)
	}
})

module.exports = router
