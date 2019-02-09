import { Circle, StyledScrollDownIndicator } from './ScrollDownIndicator.sc';
import React from 'react';
import { TimelineLite } from 'gsap/TimelineLite';
import { WHITE } from '../../utils/consts';

export default class ScrollDownIndicator extends React.PureComponent {
  circleOneRef = React.createRef();

  circleTwoRef = React.createRef();

  circleThreeRef = React.createRef();

  circleFourRef = React.createRef();

  componentDidMount() {
    this.initScrollDownAnimation();
  }

  handleScrollDown = () => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: window.innerHeight,
    });
  };

  initScrollDownAnimation() {
    this.scrollDownAnimationTimeline = new TimelineLite()
      .to([this.circleTwoRef.current, this.circleThreeRef.current, this.circleFourRef.current], 0.5, {
        ease: Power1.easeOut,
        y: 20,
      })
      .to([this.circleThreeRef.current, this.circleFourRef.current], 0.5, {
        ease: Power1.easeOut,
        y: 40,
      })
      .to(this.circleFourRef.current, 0.5, {
        ease: Power1.easeOut,
        y: 66,
      })
      .to(this.circleFourRef.current, 0.5, {
        backgroundColor: WHITE,
        ease: Power3.easeOut,
        height: 24,
        width: 24,
        y: 60,
      })
      .add(() => {
        this.scrollDownAnimationTimeline.restart();
      }, '+=0.6');
  }

  render() {
    return (
      <StyledScrollDownIndicator onClick={this.handleScrollDown}>
        <Circle ref={this.circleOneRef} />
        <Circle ref={this.circleTwoRef} />
        <Circle ref={this.circleThreeRef} />
        <Circle ref={this.circleFourRef} />
      </StyledScrollDownIndicator>
    );
  }
}
