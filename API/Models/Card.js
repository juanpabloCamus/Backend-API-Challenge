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
      message: '{VALUE} is not supported as expansion. Only Base Set, Jungle, Fossil or Base Set 2',
    },
    required: true,
    default: 'Base Set',
  },
  type: {
    type: String,
    enum: {
      values: ['Water', 'Fire', 'Grass', 'Electric'],
      message: '{VALUE} is not supported as type. Only Water, Fire, Grass or Electric',
    },
    required: true,
  },
  rarity: {
    type: String,
    enum: {
      values: ['Common', 'Not Common', 'Rare'],
      message: '{VALUE} is not supported as rarity. Only Common, Not Common or Rare',
    },
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
}, { timestamps: true });

const Card = model('Card', cardSchema);

module.exports = Card;
