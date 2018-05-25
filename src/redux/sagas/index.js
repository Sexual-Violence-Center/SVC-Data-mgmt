import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import postNewVictimSaga from './postNewVictimSaga';
import getFederalSaga from './getFederalSaga';
import getUsersSaga from './getUsersSaga';
import deleteUserSaga from './deleteUserSaga';

import searchUpdateDeleteSaga from './searchUpdateDeleteSaga';

import getCountySaga from './getCountySaga';



export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    postNewVictimSaga(),
    getFederalSaga(),
    getUsersSaga(),
    deleteUserSaga(),

    searchUpdateDeleteSaga(),

    getCountySaga(),

    // watchIncrementAsync()
  ]);
}
