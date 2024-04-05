import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      console.log('Error getAllContactsThunk', error.message);
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
  async (newWater, { rejectWithValue }) => {
    try {
      const data = await getWatersThunk(newWater);
      return data;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(`You can't add water at the same time twice`);
          return rejectWithValue(error.message);
        case 400:
          toast.warning(`You must write at least 1 ml.`);
          return rejectWithValue(error.message);
        default:
          return rejectWithValue(error.message);
      }
    }
  }
);

// ==========================================>

export const addDailyNormaThunk = createAsyncThunk(
  'water/addWater',
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

      const response = await axios.patch('/water', credentials, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error addContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
// ==========================================>

export const patchWatersThunk = createAsyncThunk(
  'water/patchWater',
  async ({ waterId, ...water }, { rejectWithValue, getState }) => {
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
      const response = await axios.put(`/water`, waterId, water, {
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
  async (id, { rejectWithValue, getState }) => {
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

      const response = await axios.delete(`/water/${id}`, {
        headers,
      });
      return response.data;
    } catch (error) {
      console.log('Error deleteContactThunk', error.message);
      return rejectWithValue(error.message);
    }
  }
);
