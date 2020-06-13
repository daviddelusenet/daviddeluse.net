import { bindActionCreators } from 'redux';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { toggleInvert } from '../../state/actionCreators/buttonInvertActionCreators';

class ButtonInvert extends React.PureComponent {
    static propTypes = {
        actions: PropTypes.shape({
            toggleInvert: PropTypes.func.isRequired,
        }).isRequired,
    };

    handleToggleInvert = () => {
        const { actions } = this.props;
        actions.toggleInvert();
    };

    render() {
        return <Button onClick={this.handleToggleInvert}>{'[ I ] Invert'}</Button>;
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            toggleInvert,
        },
        dispatch
    ),
});

export default connect(null, mapDispatchToProps)(ButtonInvert);
