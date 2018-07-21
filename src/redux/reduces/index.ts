import { combineReducers } from 'redux';

import { selectedDescription, receiveData, entriesState } from './entries';

export const rootReducer = combineReducers({
  selectedDescription,
  receiveData
});

export const rootInitialState = {
  ...entriesState
};
