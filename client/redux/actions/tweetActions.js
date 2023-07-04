import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTweets = createAsyncThunk('getAllTweets', async () => {
  try {
    const response = await axios.get('/api/tweets');
    console.log('response from action', response.data);
    return response.data;
  } catch (error) {
    console.error('error fetching tweets', error);
  }
});

export const postTweet = createAsyncThunk('postTweet', async (newTweet) => {
  try {
    console.log('newtweet', newTweet);
    const id = 1;
    const response = await axios.post(
      `/api/tweets/user/${id}/createTweet`,
      newTweet
    );
    return response.data;
  } catch (error) {
    console.error('error posting tweet from front', error);
  }
});

export const getTrendingTweets = createAsyncThunk(
  'getTrendingTweets',
  async () => {
    try {
      const response = await axios.get('/api/tweets/trending');
      return response.data;
    } catch (error) {
      console.error('error getting trending tweets', error);
    }
  }
);
