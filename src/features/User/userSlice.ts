import { ILoginResponse } from './../../constants/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../constants/types';
interface IUserState {
  username: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}
const initialState: IUserState = {
  username: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //reducers code goes here
    loginSuccess(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { loginSuccess } = userSlice.actions;
export default userSlice.reducer;
