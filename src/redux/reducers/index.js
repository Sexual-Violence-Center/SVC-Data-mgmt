import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';
import getFederalReducer from './getFederalReducer';
import getUsersReducer from './getUsersReducer';
import getCountyReducer from './getCountyReducer';
import updateFormReducer from './updateFormReducer';
import CustomReportInputReducer from './getCustomReducer';
import CustomReportReducer from './customReportReducer';
import updateFormAlertReducer from './updateFormAlertReducer';
import violenceOtherReducer from './violenceOtherReducer';


const store = combineReducers({
  user,
  login,
  newVictimEntry,
  EntryFormReducer,
  getFederalReducer,
  getUsersReducer,
  getCountyReducer,
  updateFormReducer,
  CustomReportInputReducer,
  CustomReportReducer,
  updateFormAlertReducer,
  violenceOtherReducer,
});

export default store;