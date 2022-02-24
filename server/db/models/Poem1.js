const Sequelize = require("sequelize");
const db = require("../db");

const Poem1 = db.define("poem1", {
  noun: {
    type: Sequelize.STRING,
  },
  adj: {
    type: Sequelize.STRING,
  },
  verb: {
    type: Sequelize.STRING,
  },
  adj2: {
    type: Sequelize.STRING,
  },
  verbPast: {
    type: Sequelize.STRING,
  },
  verb2Past: {
    type: Sequelize.STRING,
  },
  verb3Past: {
    type: Sequelize.STRING,
  },
  adj3: {
    type: Sequelize.STRING,
  },
  noun2: {
    type: Sequelize.STRING,
  },
  adj4: {
    type: Sequelize.STRING,
  },
  verb4Past: {
    type: Sequelize.STRING,
  },
  noun3: {
    type: Sequelize.STRING,
  },
  adj5: {
    type: Sequelize.STRING,
  },
  noun4: {
    type: Sequelize.STRING,
  },
  noun5: {
    type: Sequelize.STRING,
  },
  verb5Past: {
    type: Sequelize.STRING,
  },
  noun6: {
    type: Sequelize.STRING,
  },
  pluralNoun: {
    type: Sequelize.STRING,
  },
});

module.exports = Poem1;
