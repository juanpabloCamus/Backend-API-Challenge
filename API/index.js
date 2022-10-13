require('./db');
const express = require('express');
const morgan = require('morgan');

const app = express();
const cardRouter = require('./Routes/card');
const userRouter = require('./Routes/user');

app.use(morgan('dev'));
app.use(express.json());
app.use('/card', cardRouter);
app.use('/user', userRouter);

// Error Handler Middleware
app.use((error, req, res, next) => {
  console.error(error);
  if (error.name === 'ValidationError' || error.name === 'CastError') {
    return res.status(400).json({ error: error.message });
  }
  console.error(error);
  return res.status(500).json({ error: 'Internal server error' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
