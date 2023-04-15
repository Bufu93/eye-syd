import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';

function Logo({ color }) {
    return <StyledLogoIcon color={color} />;
}

const StyledLogoIcon = styled(LogoIcon)`
    width: 100px;
    height: 100px;
    path {
        fill: ${({ color }) => (color ? color : '#000000')};
    }
    ellipse {
        fill: ${({ color }) => (color ? color : '#000000')};
    }
    rect {
        stroke: ${({ color }) => (color ? color : '#000000')};
    }
`;

export default Logo;
