// import React from 'react';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import makeUrlFunction from './makeUrl.CustomSaga';


function* getCustom (action) {
    console.log('in getCustom saga', action.payload);
    try {
        const startDate = action.payload.startDate;
        const endDate = action.payload.endDate;
        // const querySelector = action.payload.querySelector;

        let urlText = makeUrlFunction(action.payload.selectedItem);
        console.log('urlText', urlText);
        let customDataResponse = yield call(axios.get, `/api/custom-report/${urlText}ANDstartDate=${startDate}&endDate=${endDate}`);

        console.log('customDataResponse', customDataResponse);
        return customDataResponse

    } catch (error) {
        console.log('error in GET Custom Report', error)
    } 
}

function* getCustomSaga() {
    yield takeEvery('SUBMIT_CUSTOM_REPORT', getCustom)
}

export default getCustomSaga;