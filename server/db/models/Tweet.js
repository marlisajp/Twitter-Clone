const Sequelize = require('sequelize');
const db = require('../db');

const Tweet = db.define('tweet', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validation: {
      max: 255,
      min: 1,
    },
  },
  timestamp: {
    type: Sequelize.DATE,
  },
});

module.exports = Tweet;
