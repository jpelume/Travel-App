import {createSlice} from '@reduxjs/toolkit';
import {login} from '../thunk/auth.thunk';
import storage from '../../../utils/storage';

const initialState = {
  user: {},
  userId: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    resetAuthState: state => {
      state.user = {};
      state.userId = '';
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = '';
        state.user = action?.payload?.user;
        state.userId = action?.payload?.user?.id;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@userId', action?.payload?.userId);
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action?.payload?.message;
      });
  },
});

export const {resetAuthState, setUser} = authSlice.actions;
export const getUser = ({state}: any) => state.authSlice.user;
export const getUserId = ({state}: any) => state.authSlice.userId;
export default authSlice.reducer;
