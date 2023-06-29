import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const response = await axios.post('/api/authentication/auth/login', {
        email,
        password,
      });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return response.data;
    } catch (error) {
      console.error('error logging in user', error);
      throw error;
    }
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({
    firstName,
    lastName,
    email,
    username,
    password,
    isAdmin,
    adminPassphrase,
  }) => {
    try {
      const response = await axios.post('/api/authentication/auth/signup', {
        firstName,
        lastName,
        email,
        username,
        password,
        isAdmin,
        adminPassphrase,
      });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return response.data;
    } catch (error) {
      console.error('error signing up user', error);
      throw error;
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('error logging out user', error);
    throw error;
  }
});

export const getUser = createAsyncThunk('auth/getUser', async () => {
  try {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedToken && storedUser) {
      return {
        token: storedToken,
        user: storedUser,
      };
    }

    return null;
  } catch (error) {
    console.error('Error getting logged-in user data', error);
    throw error;
  }
});
