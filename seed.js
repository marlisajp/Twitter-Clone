const db = require('./server/db/db');
// const User = require('./server/db/models/User');
// const Tweet = require('./server/db/models/Tweet');
const { User, Tweet } = require('./server/db/index');

const users = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@email.com',
    username: 'Jane D.',
    password: 'password',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    username: 'John D.',
    password: 'password',
  },
];

const tweets = [
  {
    id: 1,
    userId: 1,
    content: 'This is my first tweet!',
    timestamp: new Date(),
  },
  {
    id: 2,
    userId: 2,
    content: 'Hello, Twitter clone!',
    timestamp: new Date(),
  },
  {
    id: 3,
    userId: 1,
    content: 'Learning how to build a full-stack application!',
    timestamp: new Date(),
  },
  {
    id: 4,
    userId: 1,
    content: 'Loving the process of building this web app!',
    timestamp: new Date(),
  },
  {
    id: 5,
    userId: 2,
    content: 'Just finished setting up my Redux store!',
    timestamp: new Date(),
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(tweets.map((tweet) => Tweet.create(tweet)));
    console.log('seeding was successful');
    db.close();
  } catch (error) {
    console.error('something went wrong when seeding database!');
    console.error(error);
    db.close();
  }
};

seed();
