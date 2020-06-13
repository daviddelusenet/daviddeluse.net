import React, { FunctionComponent, useCallback, useEffect } from 'react';
import Button from '../Button/Button';
import { setIsInverted } from '../../state/global/actions';
import { useDispatch } from 'react-redux';
import useSelector from '../../state/useSelector';

const ButtonInvert: FunctionComponent = () => {
    const dispatch = useDispatch();
    const isInverted = useSelector(({ global }) => global.isInverted);

    const setIsInvertedCallback = useCallback(() => {
        dispatch(setIsInverted(!isInverted));
    }, [isInverted]);

    const onKeyPressCallback = useCallback(
        ({ key, keyCode }: KeyboardEvent) => {
            if (key === 'i' || keyCode === 105) {
                setIsInvertedCallback();
            }
        },
        [setIsInvertedCallback]
    );

    useEffect(() => {
        window.addEventListener('keypress', onKeyPressCallback);

        return () => window.removeEventListener('keypress', onKeyPressCallback);
    }, [onKeyPressCallback]);

    return <Button onClick={setIsInvertedCallback}>{'[ I ] Invert'}</Button>;
};

export default ButtonInvert;
