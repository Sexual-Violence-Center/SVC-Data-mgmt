// import React from 'react';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getCustom (action) {
    console.log('in getCustom saga', action.payload);
    try {
        // let input;
        const startDate = action.payload.startDate;
        const endDate = action.payload.endDate;
        const querySelector = action.payload.querySelector;
        const customSelection = action.payload.selectedItem.map (chip => {
            return (
             chip.value
            )
        })
        const customDataResponse = yield call(axios.get, `/api/custom-report/?${customSelection}=TRUE&querySelector=${querySelector}&startDate=${startDate}&endDate=${endDate}`);

    } catch (error) {
        
    }
    
}

function* getCustomSaga() {
    yield takeEvery('SUBMIT_CUSTOM_REPORT', getCustom)
}

export default getCustomSaga;