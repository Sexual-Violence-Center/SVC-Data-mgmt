import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';
import entryFormReducer from './EntryFormReducer';

const store = combineReducers({
  user,
  login,
  newVictimEntry,
  entryFormReducer
});

export default store;
