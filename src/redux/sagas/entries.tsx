import { put } from 'redux-saga/effects';

import { get } from '../../utilities/fetch';
import { requestFailure, requestSuccess } from '../actions/entries';

function* requestDataSaga({ selectedDescription }) {
  try {
    const res = yield get(selectedDescription);
    const data = yield res.json();
    yield put(requestSuccess(data));
  } catch (err) {
    yield put(requestFailure(err.message));
  }
}

export default requestDataSaga;
