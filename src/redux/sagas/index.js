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


export default function* rootSaga() {
    userSaga(),
    loginSaga(),
    postNewVictimSaga(),
    
    getUsersSaga(),
    deleteUserSaga(),

    searchUpdateDeleteSaga(),

    getCountySaga(),
<<<<<<< HEAD
    getCustomSaga(),
    getFederalSaga(),
=======
    deleteFormSaga(),

>>>>>>> 3f87addf2eaba20ddfb2df64afdc7e08b5d736bb

    // watchIncrementAsync()
  ]);
}
