const cardRouter = require('express').Router();
const Card = require('../Models/Card');

cardRouter.get('/', async (req, res, next) => {
  try {
    const cards = await Card.find();

    if (cards.length === 0) return res.status(404).send('No cards created yet!');

    return res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
});

cardRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cards = await Card.findById({ id });

    if (cards === null) return res.status(404).send('No card found with that id');

    return res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
});

cardRouter.post('/', async (req, res, next) => {
  try {
    const {
      name,
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    } = req.body;

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
      name,
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    } = req.body;

    const updatedCard = await Card.findByIdAndUpdate(id, {
      name,
      hp,
      firstEdition,
      expansion,
      type,
      rarity,
      image,
      price,
    }, { new: true });

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
