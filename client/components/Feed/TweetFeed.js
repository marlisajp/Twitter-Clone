import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTweets } from '../../redux/actions/tweetActions';
import { tweetsSelector } from '../../redux/reducers/tweetsReducer';
import headshot from '../../assets/headshot.jpg';
import CreateTweet from './CreateTweet';

const TweetFeed = () => {
  const allTweets = useSelector(tweetsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <div className='all-tweets-container'>
      <CreateTweet />
      {allTweets &&
        allTweets.map((tweet) => (
          <div key={tweet.id} id='single-tweet-container'>
            <div id='user-name-container'>
              <img src={headshot} id='profile-pic' />
              <div id='user-info-content-container'>
                <div id='tweet-user-info'>
                  <span>{tweet.user?.firstName} </span>
                  <span> {tweet.user?.lastName} </span>
                  <span id='user-name'> @{tweet.user?.username}</span>
                </div>
                <div id='tweet-content'>{tweet.content}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TweetFeed;
