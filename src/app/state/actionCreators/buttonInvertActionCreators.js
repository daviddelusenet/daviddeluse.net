/* eslint import/prefer-default-export: 0 */
import BUTTON_INVERT from '../actions/buttonInvertActions';

export const toggleInvert = () => ({
  type: BUTTON_INVERT.INVERT,
});
