import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-deep-water-server.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// ======================================================>
export const signUpThunk = createAsyncThunk(
  'users/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/register', credentials);
      token.set(response.data.token);
      if (response.data.token) {
        alert('You have successfully registered!');
      }
      return response.data;
    } catch (error) {
      console.log('Error signUpThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);

// ======================================================>
export const loginThunk = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);

      if (response.data.token) {
        alert('You are successfully logged in!');
      }
      return response.data;
    } catch (error) {
      alert('You have entered incorrect data, please try again!');
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      token.unset();
      await axios.post('/users/logout');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>
// User Info
// ======================================================>
