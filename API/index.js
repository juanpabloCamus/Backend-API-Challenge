require('./db');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;
const cardRouter = require('./Routes/card');

app.use(morgan('dev'));
app.use(express.json());
app.use('/card', cardRouter);

// Error Handler Middleware
app.use((error, req, res, next) => {
  console.error(error);
  if (error.name === 'ValidationError') {
    return res.status(400).send(error.message);
  }
  return res.status(500).send('Internal server error');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
