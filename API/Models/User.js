const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: String,
  passwordHash: String,
  Cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
  }],
});

const User = model('User', userSchema);

module.exports = User;
