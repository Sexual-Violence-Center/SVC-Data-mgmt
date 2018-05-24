import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import EntryFormReducer from './EntryFormReducer';
import getUsersReducer from './getUsersReducer';

const store = combineReducers({
  user,
  login,
  newVictimEntry,
  EntryFormReducer,
  getUsersReducer
});

export default store;
