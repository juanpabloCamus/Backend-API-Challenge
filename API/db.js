const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://juan:123@cluster0.a2o1jmf.mongodb.net/app?retryWrites=true&w=majority';

mongoose.connect(connectionString)
  .then(() => { console.log('Database connected!'); })
  .catch((e) => { console.error(e); });
