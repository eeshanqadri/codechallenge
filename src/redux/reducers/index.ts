import {combineReducers} from '@reduxjs/toolkit';
import home from './home';

const appReducer = combineReducers({
  home,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
