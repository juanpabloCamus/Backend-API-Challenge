require('./db');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('home');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
