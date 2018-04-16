import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Square, Wrapper } from './Logo.sc';

export default class Logo extends React.Component {
  static propTypes = {

  };

  state = {

  };

  render() {
    return(
      <Wrapper>
        <Square />
      </Wrapper>
    );
  }
}
