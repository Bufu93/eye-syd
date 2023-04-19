import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { burgerClose } from '../../../redux/slice';

function Logo({ $color, $w, $h }) {
    const dispatch = useDispatch();
    return (
        <Link to="/" onClick={() => dispatch(burgerClose())}>
            <StyledLogoIcon $color={$color} $w={$w} $h={$h} />
        </Link>
    );
}

const StyledLogoIcon = styled(LogoIcon)`
    cursor: pointer;
    width: ${({ $w = '100px' }) => $w && $w};
    height: ${({ $h = '100px' }) => $h && $h};
    path {
        fill: ${({ $color }) => ($color ? $color : '#000000')};
    }
    ellipse {
        fill: ${({ $color }) => ($color ? $color : '#000000')};
    }
    rect {
        stroke: ${({ $color }) => ($color ? $color : '#000000')};
    }
`;

export default Logo;
