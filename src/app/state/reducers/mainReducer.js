import buttonInvertReducer from './buttonInvertReducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  buttonInvert: buttonInvertReducer,
});

export default mainReducer;
