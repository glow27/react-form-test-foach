import { UPDATE_STATUS } from './actionTypes';

export const updateStatus = (name) => ({
  type: UPDATE_STATUS,
  payload: name,
});
