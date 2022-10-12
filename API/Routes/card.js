const cardRouter = require('express').Router();
const Card = require('../Models/Card');

cardRouter.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    if (cards.length === 0) return res.send('No cards created yet!');
    res.send(cards);
  } catch (error) {
    console.log(error);
  }
});

module.exports = cardRouter;
