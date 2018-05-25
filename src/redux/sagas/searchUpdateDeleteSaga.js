import { call, takeEvery } from "redux-saga/effects";
import axios from "axios";

// enter a new victim contact form into the database and
// return new ID number which will be written on the paper form
function* searchForm(action) {
  try {

  } catch (error) {
    console.log("error search Form", error);
  }
}

function* searchUpdateDeleteSaga() {
  yield takeEvery("FORM_SEARCH", searchForm);
}

export default searchUpdateDeleteSaga;
