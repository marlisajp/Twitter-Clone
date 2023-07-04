import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import tweetsReducer from '../reducers/tweetsReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tweets: tweetsReducer,
  },
});

export default store;
