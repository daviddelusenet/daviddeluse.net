import { GlobalActionTypes, SET_IS_INVERTED } from './types';

export const setIsInverted = (isInverted: boolean): GlobalActionTypes => ({
    payload: isInverted,
    type: SET_IS_INVERTED,
});

export default setIsInverted;
