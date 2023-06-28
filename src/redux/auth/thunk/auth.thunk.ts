import {createAsyncThunk} from '@reduxjs/toolkit';
import {handleErrorMessages} from '../../../utils/HandleRequestErrors';
import AuthServices from '../../../services/auth/AuthServices';

export const login = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      return new AuthServices().loginService(data);
    } catch ({error}: any) {
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);

export const singup = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      return new AuthServices().singnupService(data);
    } catch ({error}: any) {
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);

export const updateProfile = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      return new AuthServices().updateProfileService(data);
    } catch ({error}: any) {
      return thunkAPI.rejectWithValue(handleErrorMessages(error));
    }
  },
);
