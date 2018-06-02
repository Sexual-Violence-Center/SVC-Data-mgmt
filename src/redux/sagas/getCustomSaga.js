// import React from 'react';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import makeUrlFunction from './makeUrl.CustomSaga';

function* getCustomReport(action) {
    try {
        const {startDate, endDate, querySelector, selectedItem} = action.payload;
        
        let urlText = makeUrlFunction(selectedItem, querySelector);

        let customDataResponse = yield call(axios.get, `/api/custom-report/${urlText}&startDate=${startDate}&endDate=${endDate}`);
        yield put({
            type: 'CUSTOM_REPORT',
            payload: customDataResponse.data,
        })

    } catch (error) {
        yield console.log('error in GET Custom Report', error)
    } 
}

function* getCustomSaga() {
    yield takeEvery('SUBMIT_CUSTOM_REQUEST', getCustomReport)
}

export default getCustomSaga;