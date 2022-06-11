import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  value: string;
  completed: boolean;
}

export interface ITasks {
  list: ITask[];
}

const initialState: ITasks = {
  list: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.list.push({
        id: uuidv4(),
        value: action.payload,
        completed: false,
      });
    },
    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter((obj) => obj.id !== action.payload);
    },
    setCompleted(state, action) {
      const toggleCompleted = state.list.find((obj) => obj.id === action.payload);
      if (toggleCompleted) {
        toggleCompleted.completed = !toggleCompleted.completed;
      }
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;
