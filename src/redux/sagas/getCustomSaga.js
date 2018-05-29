// import React from 'react';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import makeUrlFunction from './urlForCustomSaga/makeUrl.CustomSaga';
import makeUrlAndFunction from './urlForCustomSaga/makeANDurl.CustomSaga';
import makeUrlOrFunction from './urlForCustomSaga/makeORurl.CustomSaga'

function* getCustom (action) {
    console.log('in getCustom saga', action.payload);
    try {
        let urlText;
        let customDataResponse = '';
        const startDate = action.payload.startDate;
        const endDate = action.payload.endDate;
        const querySelector = action.payload.querySelector;

        if (querySelector == null) {
           let urlText = makeUrlFunction(action.payload.selectedItem);
            console.log('urlText', urlText);
            customDataResponse = yield call(axios.get, `/api/custom-report/${urlText}ANDstartDate=${startDate}&endDate=${endDate}`);

        }
        else if (querySelector === "and") {
            let urlText = makeUrlAndFunction(action.payload.selectedItem);
            console.log('urlText', urlText);
            customDataResponse = yield call(axios.get, `/api/custom-report/${urlText}&querySelector=${querySelector}&startDate=${startDate}&endDate=${endDate}`);

        }
        else if (querySelector === "or") {
            let urlText = makeUrlOrFunction(action.payload.selectedItem);
            console.log('urlText', urlText);
            customDataResponse = yield call(axios.get, `/api/custom-report/${urlText}&querySelector=${querySelector}&startDate=${startDate}&endDate=${endDate}`);
        }

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