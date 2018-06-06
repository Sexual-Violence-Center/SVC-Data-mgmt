import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//getting victim databased on datesfrom database to report
function* getCounty(action) {
    console.log('in getCounty saga')
      const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
    try {
        // const person = yield call(getPerson)
        const county = action.payload.county;
        const startDate = action.payload.startDate;
        const endDate = action.payload.endDate;

        const personCountyDataResponse = yield call(axios.get, `/api/county-report/?county=${county}&startDate=${startDate}&endDate=${endDate}`, config);
        const violenceOther = yield call(axios.get, `/api/county-report/violenceother/?county=${county}&startDate=${startDate}&endDate=${endDate}`, config);
       yield put ({
           type: 'SET_PERSON_DATA_COUNTY',
           payload: personCountyDataResponse.data
       })
       yield put ({
           type: 'VIOLENCE_OTHER_SPECIFIED',
           payload: violenceOther.data
       })
    } catch (error) {
        console.log('error in GET County', error)
    }
}

function* getCountySaga() {
    yield takeEvery('GET_PERSON_DATA_COUNTY', getCounty)
}

export default getCountySaga;