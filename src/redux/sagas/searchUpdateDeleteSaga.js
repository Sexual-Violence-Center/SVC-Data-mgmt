import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";

// enter a new victim contact form into the database and
// return new ID number which will be written on the paper form
function* searchForm(action) {
    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
  try {
    const form = yield call(axios.get, `/api/victim/${action.payload}`, config);
    yield console.log('in search reducer ', form.data);
    yield put({
      type: 'FORM_TO_UPDATE',
      payload: form.data
    })
  } catch (error) {
    console.log("error search Form", error);
  }
}

function* updateForm(action){
  const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

  try{
    yield call(axios.put, `/api/victim/${action.payload.id}`, action.payload, config);
    yield put({
      type: 'FORM_TO_UPDATE',
      payload: null
    })
    yield put({
      type: 'UPDATE_SUCCESSFUL',
      payload: { isOpen: true }
    })
  } catch(error){
    yield console.log('error in search form ', error);
  }
}

function* searchUpdateDeleteSaga() {
  yield takeEvery("FORM_SEARCH", searchForm);
  yield takeEvery("UPDATE_FORM", updateForm);
}

export default searchUpdateDeleteSaga;
