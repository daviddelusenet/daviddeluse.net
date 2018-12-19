import React from 'react';

// Child components
import Button from '../Button/Button';

export default class ButtonInvert extends React.PureComponent {
  handleOnToggleInvert = () => {
    document.body.classList.toggle('is-inverted');
  };

  render() {
    return (
      <Button onClick={this.handleOnToggleInvert}>
        [ I ] Invert
      </Button>
    );
  }
}
