import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://db';
// ==========================================>

export const getAllWatersThunk = createAsyncThunk(
  'water/getWater',
  async (waterData, { rejectWithValue, getState }) => {
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

      const response = await axios.get('/water', waterData, {
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
  async (waterData, { rejectWithValue, getState }) => {
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

      const response = await axios.post('/water', waterData, {
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
      const response = await axios.patch(`/water`, waterId, water, {
        headers,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ==========================================>

export const deleteWatersThunk = createAsyncThunk(
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
