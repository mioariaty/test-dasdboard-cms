import { combineReducers } from "redux";
import userReducder from './user.reducer';

export default combineReducers({ 
  users: userReducder 
})