import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-deep-water-server.onrender.com/api';
// ==========================================>

export const createWaterThunk = createAsyncThunk(
  'water/getWater',
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

      const response = await axios.post('/waters/created', credentials, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error createWaterThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const getMonthThunk = createAsyncThunk(
  'water/getMonth',
  async (date, { rejectWithValue, getState }) => {
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

      const response = await axios.post('/waters/month', date, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getMonthThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ==========================================>
export const addOneTodoThunk = createAsyncThunk(
  'water/addDrink',
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

      const response = await axios.post('/waters/drink', credentials, {
        headers,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==========================================>

export const addDailyNormaThunk = createAsyncThunk(
  'waters/patchDailyLimit',
  async (data, { rejectWithValue, getState }) => {
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

      const response = await axios.patch('/waters/daily_limit', data, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error addDailyNormaThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ==========================================>

export const patchWatersThunk = createAsyncThunk(
  'water/patchWater',
  async ({ waterId, water }, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }

      if (!water) {
        console.error('No body found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.put(`/waters/${waterId}`, water, {
        headers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==========================================>

export const deleteTodoThunk = createAsyncThunk(
  'water/deleteWater',
  async ({ date, id }, { rejectWithValue, getState }) => {
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

      const response = await axios.put(`/waters/drink/${id}`, date, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error deleteContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
