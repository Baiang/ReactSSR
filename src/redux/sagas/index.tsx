import { all, takeLatest } from 'redux-saga/effects';

import requestDataSaga from './entries';
import { actionTypes } from '../actions/entries';

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.REQUEST_INIT, requestDataSaga)
  ]);
}

export default rootSaga;
