const Sequelize = require("sequelize");
const db = require("../db");

const Poem3 = db.define("poem3", {

    adj: {
        type: Sequelize.STRING,
    },
    verbS: {
        type: Sequelize.STRING,
    },
    personsName: {
        type: Sequelize.STRING,
    },
    noun: {
        type: Sequelize.STRING,
    },
    noun2: {
        type: Sequelize.STRING,
    },
    adj2: {
        type: Sequelize.STRING,
    },
    adj3: {
        type: Sequelize.STRING,
    },
    verb: {
        type: Sequelize.STRING,
    },
    exclamation: {
        type: Sequelize.STRING,
    },
    noun3: {
        type: Sequelize.STRING,
    },
    verb2S: {
        type: Sequelize.STRING,
    },
    pluralNoun: {
        type: Sequelize.STRING,
    },
    pluralNoun2: {
        type: Sequelize.STRING,
    },
    noun4: {
        type: Sequelize.STRING,
    },
    verb2: {
        type: Sequelize.STRING,
    },
    verb3: {
        type: Sequelize.STRING,
    },
    noun5: {
        type: Sequelize.STRING,
    },
    noun6: {
        type: Sequelize.STRING,
    },
});

module.exports = Poem3;
