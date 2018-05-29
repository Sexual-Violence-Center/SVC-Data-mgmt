import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCustom (action) {
    console.log('in getCustom saga');
    
}



function* getCustomSaga() {
    yield takeEvery('CUSTOM_REPORT_INPUT', getCustom)
}

export default getCustomSaga;