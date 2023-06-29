import {createSlice} from '@reduxjs/toolkit';
import {login, signup, updateProfile} from '../thunk/auth.thunk';
import storage from '../../../utils/storage';

const initialState = {
  user: {},
  userId: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  isLoginLoading: false,
  isLoginError: false,
  isLoginSuccess: false,
  loginMessage: '',
  isUpdateLoading: false,
  isUpdateError: false,
  isUpdateSuccess: false,
  updateMessage: '',
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
        state.isLoginLoading = true;
        state.isLoginError = false;
        state.isLoginSuccess = false;
        state.loginMessage = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoginLoading = false;
        state.isLoginSuccess = true;
        state.isLoginError = false;
        state.loginMessage = '';
        state.user = action?.payload?.user;
        state.userId = action?.payload?.userId;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@userId', action?.payload?.userId);
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isError = true;
        state.isLoginLoading = false;
        state.isLoginSuccess = false;
        state.loginMessage = action?.payload?.message;
      })
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = '';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = '';
        state.user = action?.payload?.user;
        state.userId = action?.payload?.userId;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@userId', action?.payload?.userId);
      })
      .addCase(signup.rejected, (state, action: any) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action?.payload?.message;
      })
      .addCase(updateProfile.pending, state => {
        state.isUpdateLoading = true;
        state.isUpdateError = false;
        state.isUpdateSuccess = false;
        state.updateMessage = '';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isUpdateLoading = false;
        state.isUpdateSuccess = true;
        state.isUpdateError = false;
        state.updateMessage = '';
        state.user = action?.payload?.user;
        state.userId = action?.payload?.userId;
        storage.storeInfo('@user', action?.payload?.user);
        storage.storeInfo('@userId', action?.payload?.userId);
      })
      .addCase(updateProfile.rejected, (state, action: any) => {
        state.isUpdateError = true;
        state.isUpdateLoading = false;
        state.isUpdateSuccess = false;
        state.updateMessage = action?.payload?.message;
      });
  },
});

export const {resetAuthState, setUser} = authSlice.actions;
export const getUser = ({state}: any) => state.authSlice.user;
export const getUserId = ({state}: any) => state.authSlice.userId;
export default authSlice.reducer;
