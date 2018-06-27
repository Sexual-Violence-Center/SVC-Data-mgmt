import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


//getting victim databased on datesfrom database to report
function* getPerson(action) {
    console.log('in get saga')
    try {
        // const person = yield call(getPerson)
        const {startDate, endDate} = action.payload;
        yield console.log('get victim data on pageload', action.payload);
        const personDataResponse = yield call(axios.get, `/api/fed-report/?startDate=${startDate}&endDate=${endDate}`);
       yield put ({
           type: 'SET_PERSON_DATA',
           payload: personDataResponse.data[0]
       })
    } catch (error) {
        console.log('error in GET', error)
    }
}

function* getFederalSaga() {
    yield takeEvery('GET_PERSON_DATA', getPerson)
}

export default getFederalSaga;