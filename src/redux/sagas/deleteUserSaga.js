import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteUserSagaCall(action) {
  console.log('deleteUserSagaCall running in deleteUserSaga');
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    yield call(axios.delete, `api/user/${action.payload.id}`, config)
    console.log("deleteUserSaga axios call:", action.payload.id);
    yield put({
      type: 'GET_USERS_SAGA'
    })
  }
    catch(error){
      console.log('an error occurred in deleteUserSaga:', error);
    }
}

function* deleteUserSaga() {
  yield takeEvery('DELETE_USER_SAGA', deleteUserSagaCall)
}

export default deleteUserSaga;