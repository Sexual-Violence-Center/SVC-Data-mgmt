import { call, takeEvery } from "redux-saga/effects";
import axios from "axios";

// enter a new victim contact form into the database and
// return new ID number which will be written on the paper form
function* searchForm(action) {
    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
  try {
    const form = yield call(axios.get, `/api/victim/${action.payload}`, config);
    yield console.log('in search reducer ', form.data);
  } catch (error) {
    console.log("error search Form", error);
  }
}

function* searchUpdateDeleteSaga() {
  yield takeEvery("FORM_SEARCH", searchForm);
}

export default searchUpdateDeleteSaga;
