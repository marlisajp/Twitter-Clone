import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../redux/actions/authActions';
import NavBar from '../NavBar';
import { userSelector } from '../../redux/reducers/authReducer';
import SubNavBar from '../Nav/SubNavBar';
import TweetFeed from '../Feed/TweetFeed';

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
        <TweetFeed />
      </div>
    </div>
  );
};

export default HomePage;
