const db = require('./models')

const products = [
  {
    name: 'Zweihander',
    category: 'sword',
    description: 'Very large two-handed sword, around 60kg',
    price: 69.99,
    image: ['/assets/sword.jpg'],
    preorder: false,
    skew: '1an74kr',
    quantity: 6,
    onsale: false,
    discount: 0,
  },
  {
    name: 'Sgian-Dubh',
    category: 'dagger',
    description:
      "The sgian-dubh is a small, single-edged knife worn as part of traditional Scottish Highland dress along with the kilt. Originally used for eating and preparing fruit, meat, and cutting bread and cheese, as well as serving for other more general day-to-day uses such as cutting material and protection, it is now worn as part of traditional Scottish dress tucked into the top of the kilt hose with only the upper portion of the hilt visible. The sgian-dubh is normally worn on the same side as the dominant hand. The name comes from the Scottish Gaelic sgian-dubh. Although the primary meaning of dubh is 'black', the secondary meaning of 'hidden' is at the root of sgian-dubh, based on the stories and theories surrounding the knife's origin, in particular those associated with the Highland custom of depositing weapons at the entrance to a house prior to entering as a guest.",
    price: 44.99,
    image: [
      '/assets/sgian-dubh.jpg',
      '/assets/sgian-dubh-2.jpg',
      '/assets/sgian-dubh-3.jpg',
    ],
    preorder: false,
    skew: 'ue6sjiw2',
    quantity: 35,
    onsale: false,
    discount: 0,
  },
  {},
]

const addProducts = async products => {
  try {
    const inventory = await db.Inventory.findOne({})
    console.log(inventory)
    // for (const item of products) {
    //   const newProduct = await db.Product.create(item)

    //   inventory.products.push(newProduct)

    //   await inventory.save()
    // }

    const newProduct = {
      name: 'zweihander 2',
      category: 'sword',
      description: 'Very large two-handed sword, around 60kg',
      price: 69.99,
      image: ['/assets/sword.jpg'],
      preorder: false,
      sku: '1an74kr',
      quantity: 6,
      onsale: false,
      discount: 0,
    }

    inventory.items.push(newProduct)

    await inventory.save()
  } catch (err) {
    console.warn(err)
  }
}

const makeInv = async () => {
  try {
    const inv = new db.Inventory({
      products: [],
    })
    await inv.save()

    // const newInv = await db.Inventory.create({})
    // const inv = await db.Inventory.find({})
    // res.json(inv)
  } catch (error) {
    console.warn(error)
  }
}

const createUser = async () => {
  try {
    const newCart = await db.Cart.create({})
    const newUser = await db.User.create({
      name: 'Emily',
      email: 'em@em.com',
      password: '123',
      orders: [],
    })

    newUser.cart = newCart
    newCart.user = newUser
    await newCart.save()
    await newUser.save()
  } catch (err) {
    console.warn(err)
  }
}

const addToCart = async () => {
  try {
    const foundUser = await db.User.findById('639d11ae9658accc3b0491d1')
    const foundCart = await db.Cart.findOne({ user: foundUser })

    const newSku = {
      sku: '1an74kr',
    }

    foundCart.products.push(newSku)

    await foundCart.save()
    // await foundUser.save()
  } catch (err) {
    console.warn(err)
  }
}

const checkOut = async () => {
  try {
  } catch (err) {
    console.warn(err)
  }
}

// makeInv()
// createUser()
// addProducts()
// addToCart()
checkOut()
