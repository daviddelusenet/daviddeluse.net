import { BLACK, WHITE } from '../../utils/consts';
import styled from 'styled-components';

export const StyledHomePage = styled.div`
    background-color: ${BLACK};

    .is-inverted & {
        background-color: ${WHITE};
    }
`;

export default StyledHomePage;
