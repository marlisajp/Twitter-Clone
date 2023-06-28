import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Nav/Button';

const NavBar = ({ user }) => {
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
    </div>
  );
};

export default NavBar;
