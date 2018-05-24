import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getUsersResponse(action) {
  console.log('getUsersResponce running in getUsersSaga');
  const config = {
    headers: {'Content-Type': 'application/json'},
    withCredentials: true,
  }
  try {
    const getResponse = yield call(axios.get, '/api/user/users', config);
    console.log('getUsersSaga axiosGET to user.router, getResponse:', getResponse);
    yield put({
      type: 'GET_USERS_REDUCER',
      payload: getResponse.data
    })
  } catch (error) {
    console.log('error in getUsersSaga axios get call', error);
 }
}

function* getUsersSaga() {
    yield takeEvery('GET_USERS_SAGA', getUsersResponse)
}

export default getUsersSaga;
