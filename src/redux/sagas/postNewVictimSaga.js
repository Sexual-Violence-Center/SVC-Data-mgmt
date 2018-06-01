import { call, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// enter a new victim contact form into the database and 
// return new ID number which will be written on the paper form
function* postNewVictim(action) {
    try {
        let payload = action.payload;
        yield Object.keys(payload).map(key => {
            if (payload[key] === "") {
                payload[key] = null;
            }
        })
        let createNewVictim = yield call(axios.post, '/api/victim', payload);
        yield put({
            type: 'DISPLAY_VICTIM_ID_NUMBER',
            payload: createNewVictim.data.id
        })
        yield put({
            type: 'CLEAR_FORM'
        })

    } catch (error) {
        console.log('error in POST new victim', error)
    }
}

function* postNewVictimSaga() {
    yield takeEvery('ADD_NEW_VICTIM', postNewVictim)
}

export default postNewVictimSaga;