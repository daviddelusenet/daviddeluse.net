/* eslint sort-keys: 0 */
// The sort-keys rule is disabled because this caused troubles with overwriting state
import BUTTON_INVERT from '../actions/buttonInvertActions';

const DEFAULT_STATE = {
    isInverted: false,
};

const buttonInvertReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case BUTTON_INVERT.INVERT:
            return {
                isInverted: !state.isInverted,
            };

        default:
            return state;
    }
};

export default buttonInvertReducer;
