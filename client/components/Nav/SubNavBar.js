import React from 'react';

const tabs = {
  home: {
    name: 'Home',
    tabs: ['For You', 'Following'],
  },
  notifications: {
    name: 'Notifications',
    tabs: ['All', 'Verified', 'Mentions'],
  },
  messages: {
    name: 'Messages',
  },
  bookmarks: {
    name: 'Bookmarks',
  },
  profile: {
    name: 'My Profile',
  },
};

const SubNavBar = ({ name, hasSettingsIcon }) => {
  return (
    <div className='sub-nav-container'>
      <p>App</p>
    </div>
  );
};

export default SubNavBar;
