export const actionTypes = {
  SELECT_DESCRIPTION: 'SELECT_DESCRIPTION',
  REQUEST_INIT: 'REQUEST_INIT',
  REQUEST_FAILURE: 'REQUEST_FAILURE',
  RECEIVE_GETS: 'RECEIVE_GETS'
};

export const selectDescription = descriptionType => ({
  type: actionTypes.SELECT_DESCRIPTION,
  descriptionType
});

export const requestInit = selectedDescription => ({
  type: actionTypes.REQUEST_INIT,
  selectedDescription
});

export const requestFailure = error => ({
  type: actionTypes.REQUEST_FAILURE,
  error
});

export const requestSuccess = result => ({
  type: actionTypes.RECEIVE_GETS,
  data: result.data
});
