const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  firstEdition: {
    type: Boolean,
    default: true,
  },
  expansion: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    enum: ['Common', 'Not Common', 'Rare'],
    default: 'Common',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Card = model('Card', cardSchema);

module.exports = Card;
