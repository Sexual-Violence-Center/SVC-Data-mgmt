import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';
import getFederalReducer from './getFederalReducer';
import getUsersReducer from './getUsersReducer';
import getCountyReducer from './getCountyReducer';


const store = combineReducers({
  user,
  login,
  newVictimEntry,
  EntryFormReducer,
  getFederalReducer,
  getUsersReducer,
  getCountyReducer,
});

export default store;