const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
    validate: [
      function validate(hp) {
        return hp % 10 === 0;
      },
      'HP should be a multiple of 10'],
  },
  firstEdition: {
    type: Boolean,
    default: true,
  },
  expansion: {
    type: String,
    enum: {
      values: ['Base Set', 'Jungle', 'Fossil', 'Base Set 2'],
      message: '{VALUE} is not supported as expansion. Only Base Set, Jungle, Fossil, Base Set 2',
    },
    required: true,
    default: 'Base Set',
  },
  type: {
    type: String,
    enum: ['Water', 'Fire', 'Grass', 'Electric'],
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
