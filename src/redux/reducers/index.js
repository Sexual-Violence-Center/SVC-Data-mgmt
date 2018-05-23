import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';
import getPersonReducer from './getPersonReducer';

const store = combineReducers({
  user,
  login,
  newVictimEntry,
  EntryFormReducer,
  getPersonReducer,
});

export default store;
