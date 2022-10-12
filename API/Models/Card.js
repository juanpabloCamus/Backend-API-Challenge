const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: String,
  hp: Number,
  firstEdition: Boolean,
  expansion: String,
  type: String,
  rarity: {
    type: String,
    enum: ['Common', 'Not Common', 'Rare'],
    default: 'Common',
  },
  price: Number,
  image: String,
});

const Card = model('Card', cardSchema);

module.exports = Card;
