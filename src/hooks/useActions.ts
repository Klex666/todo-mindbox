import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { headerActions } from '../redux/slices/headerSlice';
import { inputActions } from '../redux/slices/inputSlice';
import { tasksActions } from '../redux/slices/tasksSlice';

const allActions = {
  ...tasksActions,
  ...inputActions,
  ...headerActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
