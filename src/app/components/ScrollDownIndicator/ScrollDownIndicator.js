import { BLACK, WHITE } from '../../utils/consts';
import { Circle, StyledScrollDownIndicator } from './ScrollDownIndicator.sc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { TimelineLite } from 'gsap/TimelineLite';

class ScrollDownIndicator extends React.PureComponent {
  circleOneRef = React.createRef();

  circleTwoRef = React.createRef();

  circleThreeRef = React.createRef();

  circleFourRef = React.createRef();

  static propTypes = {
    isInverted: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.playScrollDownAnimation();
  }

  handleScrollDown = () => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: window.innerHeight,
    });
  };

  playScrollDownAnimation() {
    const { isInverted } = this.props;

    new TimelineLite({
      onComplete: () => {
        this.playScrollDownAnimation();
      },
    })
      .set(this.circleFourRef.current, {
        backgroundColor: isInverted ? WHITE : BLACK,
        height: 12,
        width: 12,
      })
      .set([this.circleTwoRef.current, this.circleThreeRef.current, this.circleFourRef.current], {
        y: 0,
      })
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
        backgroundColor: isInverted ? BLACK : WHITE,
        ease: Power3.easeOut,
        height: 24,
        width: 24,
        y: 60,
      });
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


const mapStateToProps = ({ buttonInvert: { isInverted } }) => ({
  isInverted,
});

export default connect(mapStateToProps, null)(ScrollDownIndicator);
