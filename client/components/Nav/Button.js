import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const icons = {
  home: <HomeIcon fontSize='large' />,
  notifications: <NotificationsOutlinedIcon fontSize='large' />,
  messages: <MailOutlineIcon fontSize='large' />,
  bookmarks: <BookmarkBorderIcon fontSize='large' />,
  profile: <PersonOutlineOutlinedIcon fontSize='large' />,
  logo: <TwitterIcon fontSize='large' />,
};

const Button = ({ iconName, text, link }) => {
  return (
    <Link className='nav-link' to={link}>
      {icons[iconName]}
      {text && <div className='nav-text'>{text}</div>}
    </Link>
  );
};

export default Button;
