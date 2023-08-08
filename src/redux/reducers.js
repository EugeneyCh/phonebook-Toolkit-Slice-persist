import { combineReducers } from 'redux';
import { contactsReducer } from './users/reducer';

export const appReducers = combineReducers({
  state: contactsReducer,
});
