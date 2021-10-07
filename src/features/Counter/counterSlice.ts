import { userSlice } from './../User/userSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremental(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});
export const { incremental, amountAdded } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
