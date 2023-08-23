// ========== Counter Slice
// import all packages
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICounterSliceState} from './types';

const initialState: ICounterSliceState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<ICounterSliceState>) {
      state.count = action.payload.count + state.count;
    },
  },
});

export const {increment} = counterSlice.actions;
export default counterSlice.reducer;
