import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';

const store = combineReducers({
  user,
  login,
  newVictimEntry,
  EntryFormReducer
});

export default store;
