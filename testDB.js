const db = require('./models')

const products = [
	{
		name: "Labrys",
		category: "axe",
		description: "The labrys, also known as the double-edged axe originated in the archaeological contexts of Crete. The Minoan civilization in Crete was a largely matriarchal society, and labrys was one symbol of the Minoan Goddesses and religion. The symbol represents the female labia and also a butterfly.",
		price: 299.99,
		image: ["/assets/axe.jpg"],
		preorder: false,
		skew: "1fjr234",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Caribbean Pirate Cutlass",
		category: "sword",
		description: "Although also used on land, the cutlass is best known as the sailor's weapon of choice. A naval side-arm, its popularity was likely because it was not only robust enough to hack through heavy ropes, canvas, and wood, but short enough to use in relatively close quarters, such as during boarding actions, in the rigging, or below decks. Another advantage to the cutlass was its simplicity of use. Employing it effectively required less training than that required to master a rapier or small sword, and it was more effective as a close-combat weapon than a full-sized sword would be on a cramped ship. Cutlasses are famous for being used by pirates, although there is no reason to believe that Caribbean buccaneers invented them, as has occasionally been claimed. However, the subsequent use of cutlasses by pirates is well documented in contemporary sources, notably by the pirate crews of William Fly, William Kidd, and Stede Bonnet. French historian Alexandre Exquemelin reports the buccaneer François lOllonais using a cutlass as early as 1667. Pirates used these weapons for intimidation as much as for combat, often needing no more than to grip their hilts to induce a crew to surrender, or beating captives with the flat of the blade to force their compliance or responsiveness to interrogation",
		price: 299.99,
		image: ["/assets/cutlass.jpg"],
		preorder: false,
		skew: "2387yj5",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: " King Arthur Medieval Dagger",
		category: "dagger",
		description: "Copper daggers appeared first in the early Bronze Age, in the 3rd millennium BC, and copper daggers of Early Minoan III (2400–2000 BC) were recovered at Knossos. Relief of akinakes, a type of ancient dagger, worn by an Achaemenid guard in Persepolis In ancient Egypt, daggers were usually made of copper or bronze, while royalty had gold weapons. At least since pre-dynastic Egypt, (c. 3100 BC) daggers were adorned as ceremonial objects with golden hilts and later even more ornate and varied construction. One early silver dagger was recovered with midrib design. The 1924 opening of the tomb of Tutankhamun revealed two daggers, one with a gold blade, and one of smelted iron. It is held that mummies of the Eleventh Dynasty were buried with bronze sabres; and there is a bronze dagger of Thut-mes III. (Eighteenth Dynasty), circa B.C. 1600, and bronze armour, swords and daggers of Mene-ptah II. of the (Nineteenth Dynasty) circa B.C 1300",
		price: 299.99,
		image: ["/assets/dagger.jpg"],
		preorder: false,
		skew: "ght34h",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Demon Sword",
		category: "sword",
		description: "it was rumored that it was a demonic sword that can curse the wielder to murder people. It also said that the demonic sword rumor was made by the devil hom self",
		price: 299.99,
		image: ["/assets/demon-sword.jpg"],
		preorder: false,
		skew: "fpr4goe",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Double Headed War Hammer",
		category: "war hammer",
		description: "A war hammer is a weapon that was used by both foot soldiers and cavalry. It is a very old weapon and gave its name, owing to its constant use, to Judah Maccabee, a 2nd-century BC Jewish rebel, and to Charles Martel, one of the rulers of France. In the fifteenth and sixteenth centuries the war hammer became an elaborately decorated and handsome weapon. The war hammer was a popular weapon in the late medieval period. It became somewhat of a necessity in combat when armor became so strong that swords and axes were no longer able to pierce and ricocheted upon impact. The war hammer could inflict significant damage on the enemy through their heavy impact, without the need to pierce the armor.",
		price: 299.99,
		image: ["/assets/hammer.jpg"],
		preorder: false,
		skew: "34hgy67",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Holy Mace",
		category: "mace",
		description: "The Medieval mace was a close combat weapon that was classed as being a clubbing and bruising type of weapon, it was not designed to cut skin and draw blood, which meant that the medieval mace could be used by churchmen or clerics who were not allowed to draw blood in combat in medieval times.",
		price: 199.99,
		image: ["/assets/holy-mace.jpg"],
		preorder: false,
		skew: "gh56th4",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Knights Templar Sword",
		category: "sword",
		description: "The Poor Fellow-Soldiers of Christ and of the Temple of Solomon existed between the twelfth and fourteenth centuries. They were commonly known as Knights Templar or simply Templars. Their name derived from the Latin word 'templum', which meant 'temple'. The term is associated with the seat of the Order, located in the area of the former Temple of Solomon in Jerusalem. It was created around 1118, when a knight from Champagne, Hugo de Payenes, along with his companions made his vows to the Patriarch of Jerusalem. Initially, the main task of the Knights Templar was to take care of the road safety and defend the historical sites associated with Jesus Christ. They led a simple, humble life, wearing what they received in charity. They also avoided any games and joys of chivalry, such as hunting, chess or performances of comedians.",
		price: 599.99,
		image: ["/assets/knightly-sword.jpg"],
		preorder: false,
		skew: "gh56th4",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Medieval German Mace",
		category: "mace",
		description: "The mace was developed during the Upper Paleolithic from the simple club, by adding sharp spikes of flint or obsidian. In Europe, an elaborately carved ceremonial flint mace head was one of the artifacts discovered in excavations of the Neolithic mound of Knowth in Ireland, and Bronze Age archaeology cites numerous finds of perforated mace heads. In ancient Ukraine, stone mace heads were first used nearly eight millennia ago. The others known were disc maces with oddly formed stones mounted perpendicularly to their handle. The Narmer Palette shows a king swinging a mace. See the articles on the Narmer Macehead and the Scorpion Macehead for examples of decorated maces inscribed with the names of kings.",
		price: 140.00,
		image: ["/assets/mace.jpg"],
		preorder: false,
		skew: "gjht76",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Mashrafiya Swords",
		category: "swords",
		description: "Prior to the rise of Islam in the 630s, the settled communities in the Arabian peninsula developed into distinctive civilizations, and are limited to archaeological evidence. Accounts written outside of Arabia and Arab oral traditions were later recorded by Islamic scholars. Among the most prominent civilizations were the Dilmun which arose around the end of the fourth millennium BCE and lasted to about 600CE and the Thamud which arose around 3000BCE[citation needed] and lasted to about 300CE. Additionally, from the beginning of the first millennium BCE, Southern Arabia was the home to a number of kingdoms such as the Sabaeans and the coastal areas of Eastern Arabia were controlled by the Iranian Parthians and Sassanians from 300BCE. The Arabs of the peninsula, thus, had their own local system of warfare, that was not of big armies, but of small battles and skirmishes among tribes.",
		price: 250.00,
		image: ["/assets/holy-mace.jpg"],
		preorder: false,
		skew: "54678gt",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "God of War Thor's Mjolnir Hammer",
		category: "hammer",
		description: "Mjölnir (from Old Norse Mjǫllnir) is the hammer of the thunder god Thor in Norse mythology, used both as a devastating weapon and as a divine instrument to provide blessings. The hammer is attested in numerous sources, including the 11th century runic Kvinneby amulet, the Poetic Edda, a collection of eddic poetry compiled in the 13th century, and the Prose Edda, a collection of prose and poetry compiled in the 13th century. The hammer was commonly worn as a pendant during the Viking Age in the Scandinavian cultural sphere, and Thor and his hammer occur depicted on a variety of objects from the archaeological record. Today the symbol appears in a wide variety of media and is again worn as a pendant by various groups, including adherents of modern Heathenry.",
		price: 399.00,
		image: ["/assets/mashrafiya.jpg"],
		preorder: false,
		skew: "54678gt",
		quantity: 7,
		onsale: false,
		discount: 0,
	},
	{
		name: "Zweihander",
		category: "sword",
		description: "Very large two-handed sword, around 60kg",
		price: 69.99,
		image: ["/assets/sword.jpg"],
		preorder: false,
		skew: "ert6753",
		quantity: 6,
		onsale: false,
		discount: 0,
	},
	{
		name: "Sgian-Dubh",
		category: "dagger",
		description:
			"The sgian-dubh is a small, single-edged knife worn as part of traditional Scottish Highland dress along with the kilt. Originally used for eating and preparing fruit, meat, and cutting bread and cheese, as well as serving for other more general day-to-day uses such as cutting material and protection, it is now worn as part of traditional Scottish dress tucked into the top of the kilt hose with only the upper portion of the hilt visible. The sgian-dubh is normally worn on the same side as the dominant hand. The name comes from the Scottish Gaelic sgian-dubh. Although the primary meaning of dubh is 'black', the secondary meaning of 'hidden' is at the root of sgian-dubh, based on the stories and theories surrounding the knife's origin, in particular those associated with the Highland custom of depositing weapons at the entrance to a house prior to entering as a guest.",
		price: 44.99,
		image: [
			"/assets/sgian-dubh.jpg",
			"/assets/sgian-dubh-2.jpg",
			"/assets/sgian-dubh-3.jpg",
		],
		preorder: false,
		skew: "ue6sjiw2",
		quantity: 5,
		onsale: false,
		discount: 0,
	},
	{
		name: "Valhalla Viking Battle Axe",
		category: "axe",
		description: "The most common hand weapon among Vikings was the axe - swords were more expensive to make and only wealthy warriors could afford them. The prevalence of axes in archaeological sites can likely be attributed to its role as not just a weapon, but also a common tool. This is supported by the large number of grave sites of female Scandinavians containing axes.[17] Several types of larger axes specialized for use in battle evolved, with larger heads and longer shafts, including various types of bearded axes. The larger forms were as long as a man and made to be used with both hands, called the Dane Axe. Some axe heads were inlaid with silver designs. In the later Viking era, there were axe heads with crescent shaped edges measuring up to 45 centimeters (18 in) called breiðöx (broadaxe). The double-bitted axes depicted in modern Viking art would have been very rare as it used more material and was seen as a waste during hard times, if they existed at all. No surviving examples, authentic artwork or clear descriptions from records support the existence of double-bitted axes used by Vikings. Double-bitted axes were not forged by the Norse. Just about every axe they forged was single headed. Vikings most commonly carried sturdy axes that could be thrown or swung with head-splitting force.[20] The Mammen Axe is a famous example of such battle-axes, ideally suited for throwing and melee combat. An axe head was mostly wrought iron, with a steel cutting edge. This made the weapon less expensive than a sword, and was a standard item produced by blacksmiths, historically. Like most other Scandinavian weaponry, axes were often given names. According to Snorri Sturluson's Prose Edda, axes were often named after she-trolls.",
		price: 495.00,
		image: [
			"/assets/small-battle-axe.jpg",
		],
		preorder: false,
		skew: "htrl546",
		quantity: 6,
		onsale: false,
		discount: 0,
	},
	{
		name: "Dory Ancient Greece Spear",
		category: "spear",
		description: "The dory or doru is a spear that was the chief spear of hoplites (heavy infantry) in Ancient Greece. The word dory was first attested by Homer with the meanings of 'wood' and 'spear'. Homeric heroes hold two dorata (Greek: δόρατα, plural of δόρυ) (Il. 11,43, Od. 1, 256). In the Homeric epics and in the classical period the dory was a symbol of military power, possibly more important than the sword, as can be inferred from expressions like 'Troy conquered by 'dory' (Il. 16,708) and words like 'doryktetos' (Greek: δορίκτητος) (spear-won) and 'doryalotos' (Greek: δορυάλωτος) (spear-taken).[1]The spear used by the Persian army under Darius I and Xerxes in their respective campaigns during the Greco-Persian Wars was shorter than that of their Greek opponents. The dory's length enabled multiple ranks of a formation to engage simultaneously during combat. The dory was not a javelin. However, its aerodynamic shape allowed the dory to be thrown. Because it had evolved for combat between phalanges (the plural form of phalanx), it was constructed so as to be adequate against the defences of Greek infantry, which incorporated bronze in shield and helmet construction. Hoplites were generally more heavily armored than infantry of their non-Greek contemporaries.",
		price: 369.00,
		image: [
			"/assets/spear.jpg",
		],
		preorder: false,
		skew: "hrgl526",
		quantity: 35,
		onsale: false,
		discount: 0,
	},
	{
		name: "Longsword Sword ",
		category: "sword",
		description: "Codified systems of fighting with the longsword existed from the later 14th century, with a variety of styles and teachers each providing a slightly different take on the art. Hans Talhoffer, a mid-15th-century German fightmaster, is probably the most prominent, using a wide variety of moves, most resulting in wrestling. The longsword was a quick, effective, and versatile weapon capable of deadly thrusts, slices, and cuts. The blade was generally used with both hands on the hilt, one resting close to or on the pommel. The weapon may be held with one hand during disarmament or grappling techniques. In a depiction of a duel, individuals may be seen wielding sharply pointed longswords in one hand, leaving the other hand open to manipulate the large dueling shield. Another variation of use comes from the use of armour. Half-swording was a manner of using both hands, one on the hilt and one on the blade, to better control the weapon in thrusts and jabs. This versatility was unique, as multiple works hold that the longsword provided the foundations for learning a variety of other weapons including spears, staves, and polearms.[17][18] Use of the longsword in attack was not limited only to use of the blade, however, as several Fechtbücher explain and depict use of the pommel and cross as offensive weapons. The cross has been shown to be used as a hook for tripping or knocking an opponent off balance. Some manuals even depict the cross as a hammer.",
		price: 179.99,
		image: [
			"/assets/sword.jpg",
		],
		preorder: false,
		skew: "gvhbxdf",
		quantity: 3,
		onsale: false,
		discount: 0,
	},
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
