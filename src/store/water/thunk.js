import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-deep-water-server.onrender.com/api';
// ==========================================>

export const getWatersThunk = createAsyncThunk(
  'water/getWater',
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

      const response = await axios.post('/waters/created', date, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getWatersThunk', error.message);
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

      const response = await axios.get('/waters/month', date, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error getAllContactsThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ==========================================>
export const addWatersThunk = createAsyncThunk(
  'water/addWater',
  async (newWater, { rejectWithValue, getState }) => {
    try {
      const store = getState();
      const token = store.users.token;

      if (!token) {
        console.error('No token found.');
        return;
      }
      if (!newWater) {
        console.error('No data found.');
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post('/waters/drink', newWater, {
        headers,
      });
      return response;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          return rejectWithValue(error.message);
        case 400:
          return rejectWithValue(error.message);
        default:
          return rejectWithValue(error.message);
      }
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
  async ({ id, date }, { rejectWithValue, getState }) => {
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

      const response = await axios.delete(`/waters/${id}`, date, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error deleteContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
