import { BLACK, WHITE } from '../../utils/consts';
import { Circle, StyledScrollDownIndicator } from './ScrollDownIndicator.sc';
import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useSelector from '../../state/useSelector';

let scrollDownIndicatorTimeline: gsap.core.Timeline | undefined;

const ScrollDownIndicator: FunctionComponent = () => {
    const circleOneRef = useRef(null);
    const circleTwoRef = useRef(null);
    const circleThreeRef = useRef(null);
    const circleFourRef = useRef(null);
    const isInverted = useSelector(({ global }) => global.isInverted);

    const onScrollDownCallback = useCallback(() => {
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: window.innerHeight,
        });
    }, []);

    const playScrollDownAnimationCallback = useCallback(() => {
        if (scrollDownIndicatorTimeline) {
            scrollDownIndicatorTimeline.kill();
        }

        scrollDownIndicatorTimeline = gsap.timeline({
            repeat: -1,
        });

        scrollDownIndicatorTimeline
            .set(circleFourRef.current, {
                backgroundColor: isInverted ? WHITE : BLACK,
                height: 12,
                width: 12,
            })
            .set([circleTwoRef.current, circleThreeRef.current, circleFourRef.current], {
                y: 0,
            })
            .to([circleTwoRef.current, circleThreeRef.current, circleFourRef.current], 0.5, {
                ease: 'power1.easeOut',
                y: 20,
            })
            .to([circleThreeRef.current, circleFourRef.current], 0.5, {
                ease: 'power1.easeOut',
                y: 40,
            })
            .to(circleFourRef.current, 0.5, {
                ease: 'power1.easeOut',
                y: 66,
            })
            .to(circleFourRef.current, 0.5, {
                backgroundColor: isInverted ? BLACK : WHITE,
                ease: 'power3.easeOut',
                height: 24,
                width: 24,
                y: 60,
            });
    }, [circleOneRef, circleTwoRef, circleThreeRef, circleFourRef, isInverted]);

    useEffect(() => {
        playScrollDownAnimationCallback();
    }, [playScrollDownAnimationCallback]);

    return (
        <StyledScrollDownIndicator onClick={onScrollDownCallback}>
            <Circle ref={circleOneRef} />
            <Circle ref={circleTwoRef} />
            <Circle ref={circleThreeRef} />
            <Circle ref={circleFourRef} />
        </StyledScrollDownIndicator>
    );
};

export default ScrollDownIndicator;
