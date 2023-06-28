//! ADD ASSOCIATIONS !//
const User = require('./models/User');
const Tweet = require('./models/Tweet');

User.hasMany(Tweet);
Tweet.belongsTo(User);

module.exports = {
  User,
  Tweet,
};
