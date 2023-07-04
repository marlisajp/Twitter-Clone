import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../redux/actions/authActions';
import NavBar from '../NavBar';
import { userSelector } from '../../redux/reducers/authReducer';
import SubNavBar from '../Nav/SubNavBar';
import TweetFeed from '../Feed/TweetFeed';
import CreateTweet from '../Feed/CreateTweet';
import SearchBar from './SearchBar';
import TrendingBox from './TrendingBox';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  console.log('user', user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className='home-container'>
      <NavBar />
      <div className='middle-container'>
        <SubNavBar name='home' hasSettingsIcon={true} />
        <div className='feed-container'>
          <TweetFeed />
        </div>
      </div>
      <div className='right-container'>
        <SearchBar />
        <TrendingBox />
      </div>
    </div>
  );
};

export default HomePage;
