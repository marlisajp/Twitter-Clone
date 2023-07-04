import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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
  const [activeTab, setActiveTab] = useState(
    tabs[name].tabs ? tabs[name].tabs[0] : ''
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='sub-nav-container'>
      <div className='name-settings-container'>
        <span id='sub-nav-text'>{tabs[name].name}</span>
        {hasSettingsIcon && <SettingsOutlinedIcon fontSize='small' />}
      </div>
      <div className='sub-tabs-container'>
        {tabs[name].tabs &&
          tabs[name].tabs.map((tab, index) => (
            <Link
              onClick={() => handleTabClick(tab)}
              className={`sub-nav-link ${
                tab === activeTab ? 'tab-active' : 'tab-inactive'
              }`}
              key={index}>
              {tab}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SubNavBar;
