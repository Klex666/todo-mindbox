import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  sort: 'all',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const headerActions = headerSlice.actions;

export default headerSlice.reducer;
