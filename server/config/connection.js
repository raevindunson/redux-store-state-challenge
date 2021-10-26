// TAKEN FROM MODULE 22 SHOP SHOP COURSEWORK FROM GW CODING BOOTCAMP

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;

// TAKEN FROM MODULE 22 SHOP SHOP COURSEWORK FROM GW CODING BOOTCAMP
