export interface GlobalState {
    isInverted: boolean;
}

export const SET_IS_INVERTED = 'global.SET_IS_INVERTED';

interface SetIsInvertedAction {
    payload: GlobalState['isInverted'];
    type: typeof SET_IS_INVERTED;
}

export type GlobalActionTypes = SetIsInvertedAction;
