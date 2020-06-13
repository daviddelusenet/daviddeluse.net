import { applyMiddleware, combineReducers, createStore } from 'redux';
import global from './global/reducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    global,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
