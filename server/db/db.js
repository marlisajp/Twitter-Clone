const Sequelize = require('sequelize');
console.log('opening database connection...');

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/twitter-clone',
  {
    logging: false,
  }
);

module.exports = db;
