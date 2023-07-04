import React from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const icons = {
  image: <ImageOutlinedIcon fontSize='medium' />,
  gif: <GifBoxOutlinedIcon fontSize='medium' />,
  poll: <BallotOutlinedIcon fontSize='medium' />,
  emoji: <SentimentSatisfiedOutlinedIcon fontSize='medium' />,
  schedule: <DateRangeOutlinedIcon fontSize='medium' />,
  location: <LocationOnOutlinedIcon fontSize='medium' />,
  bold: <FormatBoldOutlinedIcon fontSize='medium' />,
  italic: <FormatItalicOutlinedIcon fontSize='medium' />,
};

const SmallIcon = ({ iconName }) => {
  return <div className='small-icon'>{icons[iconName]}</div>;
};

export default SmallIcon;
