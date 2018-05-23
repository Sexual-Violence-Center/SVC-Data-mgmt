import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import postNewVictimSaga from './postNewVictimSaga';
import getUsersSaga from './getUsersSaga';
import deleteUserSaga from './deleteUserSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    postNewVictimSaga(),
    getUsersSaga(),
    deleteUserSaga(),
    // watchIncrementAsync()
  ]);
}
