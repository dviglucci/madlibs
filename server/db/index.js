// This is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Poem1 = require('./models/Poem1');
const Poem2 = require('./models/Poem2');
const Poem3 = require('./models/Poem3');
const FinalPoem = require('./models/FinalPoem');

// Associations
User.hasMany(FinalPoem);
FinalPoem.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Poem1,
    Poem2,
    Poem3,
    FinalPoem,
  },
};
