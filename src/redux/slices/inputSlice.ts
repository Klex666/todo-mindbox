import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  valueInput: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setValueInput(state, action: PayloadAction<string>) {
      state.valueInput = action.payload;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
