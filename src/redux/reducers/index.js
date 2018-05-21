import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import newVictimEntry from './postNewVictimReducer';

const store = combineReducers({
  user,
  login,
  newVictimEntry
});

export default store;
