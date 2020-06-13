import React, { useCallback, useEffect } from 'react';
import Button from '../Button/Button';
import { toggleInvert } from '../../state/actionCreators/buttonInvertActionCreators';
import { useDispatch } from 'react-redux';

const ButtonInvert = () => {
    const dispatch = useDispatch();

    const onToggleInvertCallback = useCallback(() => {
        dispatch(toggleInvert());
    }, []);

    const onKeyPressCallback = useCallback(
        (event) => {
            if (event.key === 'i' || event.keyCode === 105) {
                onToggleInvertCallback();
            }
        },
        [onToggleInvertCallback]
    );

    useEffect(() => {
        window.addEventListener('keypress', onKeyPressCallback);

        return () => window.removeEventListener('keypress', onKeyPressCallback);
    }, [onKeyPressCallback]);

    return <Button onClick={onToggleInvertCallback}>{'[ I ] Invert'}</Button>;
};

export default ButtonInvert;
