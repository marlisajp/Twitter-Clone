import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from './Nav/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const NavBar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div id='nav-container'>
      <Button iconName='logo' link='/home' />
      <Button iconName='home' text='Home' link='/home' />
      <Button
        iconName='notifications'
        text='Notifications'
        link='/notifications'
      />
      <Button iconName='messages' text='Messages' link='/messages' />
      <Button iconName='bookmarks' text='Bookmarks' link='/bookmarks' />
      <Button iconName='profile' text='Profile' link='/profile' />
      <Link id='nav-button' to='/compose/tweet'>
        Tweet
      </Link>
      <Link id='logout-button' onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
};

export default NavBar;
