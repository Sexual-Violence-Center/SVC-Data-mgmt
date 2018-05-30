import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import postNewVictimSaga from './postNewVictimSaga';
import getFederalSaga from './getFederalSaga';
import getUsersSaga from './getUsersSaga';
import deleteUserSaga from './deleteUserSaga';
import searchUpdateDeleteSaga from './searchUpdateDeleteSaga';
import getCountySaga from './getCountySaga';
import getCustomSaga from './getCustomSaga'
import deleteFormSaga from './deleteFormSaga';

function* rootSaga() {
    userSaga(),
        loginSaga(),
        postNewVictimSaga(),

        getUsersSaga(),
        deleteUserSaga(),

        searchUpdateDeleteSaga(),

        getCountySaga(),
        getCustomSaga(),
        getFederalSaga(),
        deleteFormSaga()

    // watchIncrementAsync(),
}

export default rootSaga;
