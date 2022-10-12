const cardRouter = require('express').Router();
const Card = require('../Models/Card');

cardRouter.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    if (cards.length === 0) return res.send('No cards created yet!');
    return res.send(cards);
  } catch (error) {
    console.log(error);
  }
});

cardRouter.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const cards = await Card.findOne({ name });
    if (cards === null) return res.send('No card found with that name');
    return res.send(cards);
  } catch (error) {
    console.log(error);
  }
});

module.exports = cardRouter;