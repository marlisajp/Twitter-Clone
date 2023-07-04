const Sequelize = require('sequelize');
const db = require('../db');

const TrendingTweet = db.define('trendingTweet', {
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trendingWord: {
    type: Sequelize.STRING,
  },
  tweetCount: {
    type: Sequelize.STRING,
  },
});

module.exports = TrendingTweet;
