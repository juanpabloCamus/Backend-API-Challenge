const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const JWT_SECRET = 'crystalzoom';

// Register
userRouter.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const findExistingUsername = await User.findOne({ username });
    if (findExistingUsername !== null) return res.status(400).send('This username already exists!');

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      passwordHash,
    });

    const savedUser = await user.save();

    return res.status(200).send(savedUser);
  } catch (error) {
    next(error);
  }
});

// Login

userRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'Invalid user or password',
      });
    }

    const userForJwt = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(userForJwt, JWT_SECRET);

    return res.send({
      name: user.name,
      username: user.username,
      id: user._id,
      token,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
