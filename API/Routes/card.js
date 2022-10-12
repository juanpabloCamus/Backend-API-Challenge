const cardRouter = require('express').Router();

cardRouter.get('/', (req, res) => {
  res.send('card');
});

module.exports = cardRouter;
