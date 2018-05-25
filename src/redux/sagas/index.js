import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import postNewVictimSaga from './postNewVictimSaga';
import getPersonData from './getPersonSaga';
import getUsersSaga from './getUsersSaga';
import deleteUserSaga from './deleteUserSaga';
import searchUpdateDeleteSaga from './searchUpdateDeleteSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    postNewVictimSaga(),
    getPersonData(),
    getUsersSaga(),
    deleteUserSaga(),
    searchUpdateDeleteSaga(),
    // watchIncrementAsync()
  ]);
}
