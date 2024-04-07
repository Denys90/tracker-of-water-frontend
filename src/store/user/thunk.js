import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-toastify';

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
        // toast.success(`You have successfully registered!`);
        alert('You have successfully registered!');
      }
      return response.data;
    } catch (error) {
      alert('Something went wrong, please try again!');
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
      // const store = getState();
      // const token = store.users.token;

      // const headers = {
      //   Authorization: `Bearer ${token}`,
      // };
      await axios.get('/users/logout');
      token.unset();
      alert('You are successfully logout!');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>
// User Info
// ======================================================>
export const getUserInfoThunk = createAsyncThunk(
  'users/getInfo',
  async (_, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get('/users/info', {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getAllContactsThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>
export const patchUserInfoThunk = createAsyncThunk(
  'users/patchInfo',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.patch('/users/info', credentials, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getAllContactsThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>
export const patchUserAvatarThunk = createAsyncThunk(
  'users/patchAvatar',
  async (credentials, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.patch('/users/avatar', credentials, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getAllContactsThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
