const Sequelize = require("sequelize");
const db = require("../db");

const Poem2 = db.define("poem2", {
  verb: {
    type: Sequelize.STRING,
  },
  pluralNoun: {
    type: Sequelize.STRING,
  },
  noun: {
    type: Sequelize.STRING,
  },
  verbIng: {
    type: Sequelize.STRING,
  },
  adj: {
    type: Sequelize.STRING,
  },
  adj2: {
    type: Sequelize.STRING,
  },
  adj3: {
    type: Sequelize.STRING,
  },
});

module.exports = Poem2;
