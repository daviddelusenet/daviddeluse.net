/* eslint sort-keys: 0 */
import { GlobalActionTypes, GlobalState, SET_IS_INVERTED } from './types';

const initialState: GlobalState = {
    isInverted: false,
};

const globalReducer = (state = initialState, action: GlobalActionTypes): GlobalState => {
    switch (action.type) {
        case SET_IS_INVERTED:
            return {
                ...state,
                isInverted: action.payload,
            };

        default:
            return state;
    }
};

export default globalReducer;
