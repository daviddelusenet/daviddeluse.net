import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  background-color: #000;
  height: 100px;
  width: 100px;
`;

export default class Logo extends React.Component {
  static propTypes = {

  };

  state = {

  };

  render() {
    return(<Wrapper>You did it!</Wrapper>);
  }
}
