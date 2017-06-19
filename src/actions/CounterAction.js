import { createAction } from 'redux-actions';
import { ACTION_INCREMENT, ACTION_DECREMENT, ACTION_TIMES } from '../constants/ActionTypes';

export const actionIncrement = createAction(ACTION_INCREMENT, () => 1);
export const actionDecrement = createAction(ACTION_DECREMENT, () => -1);
export const actionTimes = createAction(ACTION_TIMES, () => 2);
