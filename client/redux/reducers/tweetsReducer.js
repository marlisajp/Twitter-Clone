import { createSlice } from '@reduxjs/toolkit';
import {
  getTrendingTweets,
  getTweets,
  postTweet,
} from '../actions/tweetActions';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    allTweets: [],
    userTweets: [],
    trendingTweets: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTweets.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTweets.fulfilled, (state, action) => {
        console.log('reducer', action.payload);
        state.allTweets = action.payload;
        state.loading = false;
      })
      .addCase(postTweet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postTweet.fulfilled, (state, action) => {
        // state.userTweets.push(action.payload);
        const newArray = [action.payload, ...state.allTweets];
        state.allTweets = newArray;
        state.loading = false;
      })
      .addCase(getTrendingTweets.fulfilled, (state, action) => {
        state.trendingTweets = action.payload;
      });
  },
});

export const tweetsSelector = (state) => state.tweets.allTweets;
export const trendingTweetsSelector = (state) => state.tweets.trendingTweets;
// export const userTweetsSelector = (state) => state.tweets.userTweets;

export default tweetsSlice.reducer;
