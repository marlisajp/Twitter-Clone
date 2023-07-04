import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { trendingTweetsSelector } from '../../redux/reducers/tweetsReducer';
import { getTrendingTweets } from '../../redux/actions/tweetActions';

const TrendingBox = () => {
  const trendingTweets = useSelector(trendingTweetsSelector);
  console.log('trendingtweets', trendingTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingTweets());
  }, [dispatch]);

  return (
    <div className='trending-box'>
      <p id='trending-header'>What's happening</p>
      <div id='all-trending-words'>
        {trendingTweets &&
          trendingTweets.map((tweet) => (
            <div key={tweet.id} className='trending-word-container'>
              <p className='trending-text'>{tweet.category} · Trending</p>
              <p id='trending-word' className='trending-text'>
                {tweet.trendingWord}
              </p>
              <p className='trending-text'>{tweet.tweetCount}</p>
            </div>
          ))}
        <p id='show-more-button'>Show More</p>
      </div>
    </div>
  );
};

export default TrendingBox;
