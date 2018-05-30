import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteFormSaga(action) {
  yield console.log('deleteFormSaga running', action);
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    console.log('DeleteFormSaga', action.payload.id);
    yield call(axios.delete, `api/victim/${action.payload.id}`, config)
    yield alert(`delete confirmation ${action.payload.id}`)
  }
    catch(error){
      console.log('an error occurred in deleteFormSaga:', error);
    }
}

function* deleteSaga() {
  yield takeEvery('DELETE_FORM', deleteFormSaga)
}

export default deleteSaga;