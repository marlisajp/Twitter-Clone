const router = require('express').Router();
const { Tweet, User } = require('../db/index');
const TrendingTweet = require('../db/models/TrendingTweet');
const {
  requireUserMatch,
  requireAuth,
} = require('./authentication/authMiddleware');

router.get('/', async (req, res, next) => {
  try {
    const getAllTweets = await Tweet.findAll({ include: [User] });
    res.send(getAllTweets);
  } catch (error) {
    console.error('error finding all tweets', error);
    next(error);
  }
});

router.get('/user/:userId', async (req, res, next) => {
  try {
    const userTweets = await Tweet.findAll({
      where: { userId: req.params.userId },
      include: [User],
    });
    if (!userTweets) res.status(404).send('User has no tweets');
    res.status(200).send(userTweets);
  } catch (error) {
    console.error('error finding users tweets', error);
    next(error);
  }
});

router.post('/user/:userId/createTweet', async (req, res, next) => {
  try {
    const newTweet = req.body;
    console.log('id', req.params.userId);
    console.log('newtweet', newTweet);
    const createTweet = await Tweet.create({
      ...newTweet,
      userId: req.params.userId,
    });
    res.status(202).send(createTweet);
  } catch (error) {
    console.error('error creating new tweet for user', error);
    next(error);
  }
});

router.get('/trending', async (req, res, next) => {
  try {
    const trendingTweets = await TrendingTweet.findAll();
    res.send(trendingTweets);
  } catch (error) {
    console.error('error fetching trending tweets', error);
    next(error);
  }
});

module.exports = router;
