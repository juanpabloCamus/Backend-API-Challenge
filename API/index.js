require('./db');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;
const cardRouter = require('./Routes/card');

app.use(morgan('dev'));
app.use(express.json());
app.use('/card', cardRouter);

app.get('/', (req, res) => {
  res.send('home');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
