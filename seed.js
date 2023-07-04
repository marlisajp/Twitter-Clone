const db = require('./server/db/db');
const { User, Tweet } = require('./server/db/index');
const TrendingTweet = require('./server/db/models/TrendingTweet');

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
    userId: 1,
    content: 'This is my first tweet!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Hello, Twitter clone!',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'Learning how to build a full-stack application!',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'Loving the process of building this web app!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Just finished setting up my Redux store!',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'Exploring the world of coding and it feels great!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Debugging is actually fun once you get the hang of it!',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'So excited to be working on this Twitter clone project!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Building a clone app is a great way to learn how to code.',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'React and Redux are an awesome combo!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Learning a lot about full-stack development.',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'This project is helping me understand how Twitter works!',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'This app is starting to come together. So rewarding!',
    timestamp: new Date(),
  },
  {
    userId: 1,
    content: 'It is exciting to see how far I have come with this project.',
    timestamp: new Date(),
  },
  {
    userId: 2,
    content: 'Hard work is paying off. Seeing progress!',
    timestamp: new Date(),
  },
];

const trendingTweets = [
  {
    id: 1,
    category: 'Sports',
    trendingWord: 'Olympics 2023',
    tweetCount: '1.2M Tweets',
  },
  {
    id: 2,
    category: 'Music',
    trendingWord: '#NewAlbumRelease',
    tweetCount: '890K Tweets',
  },
  {
    id: 3,
    category: 'Politics',
    trendingWord: '#ElectionDebate',
    tweetCount: '3M Tweets',
  },
  {
    id: 4,
    category: 'Entertainment',
    trendingWord: 'Spiderman No Way Home',
    tweetCount: '2.5M Tweets',
  },
  {
    id: 5,
    category: 'Technology',
    trendingWord: 'iOS 15.3',
    tweetCount: '680K Tweets',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(users.map((user) => User.create(user)));
    await Promise.all(tweets.map((tweet) => Tweet.create(tweet)));
    await Promise.all(
      trendingTweets.map((tweet) => TrendingTweet.create(tweet))
    );
    console.log('seeding was successful');
    db.close();
  } catch (error) {
    console.error('something went wrong when seeding database!');
    console.error(error);
    db.close();
  }
};

seed();
