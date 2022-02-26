const Sequelize = require("sequelize");
const db = require("../db");

const FinalPoem = db.define("finalPoem", {
  content: {
    type: Sequelize.TEXT,
  }
});

module.exports = FinalPoem;