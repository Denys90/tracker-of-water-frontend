import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      toast.success(response.data.message);
      token.set(response.data.token);

      return response.data;
    } catch (error) {
      toast.error('Something went wrong, please try again!');
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

      return response.data;
    } catch (error) {
      toast.error('You have entered incorrect data, please try again!');
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
      toast.success('You are successfully logout!');
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
      return rejectWithValue(error.message);
    }
  }
);
// ======================================================>
export const patchUserAvatarThunk = createAsyncThunk(
  'users/patchAvatar',
  async (file, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };

      const response = await axios.patch('/users/avatar', file, {
        headers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//=========================================================================
export const getCurrentThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found - getCurrentThunk.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data' || 'application/json',
      };

      const response = await axios.get('/users/current', {
        headers,
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const verifyThunk = createAsyncThunk(
  'users/verify',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.get(
        `/users/verify/${data.verificationToken}`
      );

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
