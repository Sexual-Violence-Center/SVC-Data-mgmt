import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// enter a new victim contact form into the database and 
// return new ID number which will be written on the paper form
function* postNewVictim(action) {
    try {
        yield console.log('postNewVictim clicked submit', action.payload);
        yield call(axios.post, '/api/victim', action.payload)
    //    yield console.log('new victim response', createNewVictim);
    //    yield put ({
    //        type: 'DISPLAY_VICTIM_ID_NUMBER',
    //        payload: createNewVictim.data.id
    //    })
    } catch (error) {
        console.log('error in POST new victim', error)
    }
}

function* postNewVictimSaga() {
    yield takeEvery('ADD_NEW_VICTIM', postNewVictim)
}

export default postNewVictimSaga;