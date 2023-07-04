import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';
import SmallIcon from '../SmallIcon';
import { postTweet } from '../../redux/actions/tweetActions';

const CreateTweet = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handlePostTweet = async (e) => {
    e.preventDefault();
    const newTweet = {
      content: content,
      timestamp: new Date(),
    };
    await dispatch(postTweet(newTweet));
    setContent('');
  };

  return (
    <div className='tweet-container'>
      <form id='input-form' name='tweet' onSubmit={handlePostTweet}>
        <div id='input-profile-container'>
          <img className='profile-img' src={logo} />
          <input
            id='tweet-input'
            name='tweet'
            onChange={(e) => setContent(e.target.value)}
            placeholder='What is happening?!'
            required
            type='text'
            value={content}
            maxLength={255}
          />
        </div>
        <div id='tweet-icon-container-button'>
          <div id='icons-container'>
            <SmallIcon iconName='image' />
            <SmallIcon iconName='gif' />
            <SmallIcon iconName='poll' />
            <SmallIcon iconName='emoji' />
            <SmallIcon iconName='schedule' />
            <SmallIcon iconName='location' />
            <SmallIcon iconName='bold' />
            <SmallIcon iconName='italic' />
          </div>
          <div id='tweet-button'>
            <input id='post-tweet-button' type='submit' value='Tweet' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTweet;
