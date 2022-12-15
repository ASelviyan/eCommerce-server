const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require('express').Router()

// GET all previous orders
router.get('/:id/orders', async (req, res) => {
  const id = req.params.id
  try {
    const foundUser = await db.User.findById(id).populate({ path: 'orders' })

    res.json(foundUser)
  } catch (err) {
    console.warn(err)
  }
})

module.exports = router
