const cardRouter = require('express').Router();
const Card = require('../Models/Card');

// Return all cards (you can send filters by query) or find a card by name
cardRouter.get('/', async (req, res, next) => {
  let { name } = req.query;

  if (name) {
    try {
      name = name.toLowerCase();
      name = name.charAt(0).toUpperCase() + name.slice(1);

      const cards = await Card.findOne({ name });

      if (cards === null) return res.status(404).send('No card found with that name');
      return res.status(200).send(cards);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const {
        page,
        expansion,
        type,
        rarity,
      } = req.query;

      const cards = await Card.paginate({}, {
        page,
        limit: 5,
      });

      if (cards.docs.length === 0) return res.status(404).send('No cards created yet!');

      if (expansion) cards.docs = cards.docs.filter((c) => c.expansion === expansion);
      if (type) cards.docs = cards.docs.filter((c) => c.type === type);
      if (rarity) cards.docs = cards.docs.filter((c) => c.rarity === rarity);

      cards.totalDocs = cards.docs.length;

      return res.status(200).send(cards);
    } catch (error) {
      next(error);
    }
  }
});

// Return card by id
cardRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cards = await Card.findById(id);

    if (cards === null) return res.status(404).send('No card found with that id');

    return res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
});

cardRouter.post('/', async (req, res, next) => {
  try {
    const {
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    } = req.body;

    // Capitalizing name
    let { name } = req.body;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    const isCreated = await Card.findOne({ name });
    if (isCreated) return res.status(400).send('A card with this name is already created!');

    const newCard = new Card({
      name,
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    });

    await newCard.save();

    return res.status(201).send(newCard);
  } catch (error) {
    next(error);
  }
});

cardRouter.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    } = req.body;

    // Capitalizing name
    let { name } = req.body;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);

    const updatedCard = await Card.findByIdAndUpdate(id, {
      name,
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    }, { new: true, runValidators: true });

    if (updatedCard === null) return res.status(404).send('No card found with that id');

    return res.status(201).send(updatedCard);
  } catch (error) {
    next(error);
  }
});

cardRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Card.findByIdAndRemove(id);

    if (deleted === null) return res.status(404).send('No card found with that id');

    return res.send(deleted);
  } catch (error) {
    next(error);
  }
});

module.exports = cardRouter;
