import { fromJS } from 'immutable';

import { actionTypes } from '../actions/entries';
import { allDescriptionType } from '../../index.tsx';

const initialStateSelectedDescription = allDescriptionType[0];
export const selectedDescription = (state = initialStateSelectedDescription, action = {}) => {
  switch (action.type) {
    case actionTypes.SELECT_DESCRIPTION:
      return action.descriptionType;
    default:
      return state;
  }
};

const initialStateReceiveData = fromJS({
  description: null,
  error: null
});

export const receiveData = (state = initialStateReceiveData, action = {}) => {
  switch (action.type) {
    case actionTypes.RECEIVE_GETS:
      return state.set('description', action.data.description);
    case actionTypes.REQUEST_FAILURE:
      return state.set('error', action.error);
    default:
      return state;
  }
};

export const entriesState = {
  selectedDescription: initialStateSelectedDescription,
  receiveData: initialStateReceiveData
};
