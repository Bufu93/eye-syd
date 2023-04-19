import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/x.svg';
import { toogleBurger } from '../../../redux/slice';
import { useLocation } from 'react-router-dom';

function BurgerMenu() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { activeHeader, activeBurger } = useSelector((state) => state.store);

    return (
        <StyledBurgerMenu onClick={() => dispatch(toogleBurger())}>
            {activeBurger ? (
                <CloseIcon />
            ) : (
                <StyledMenuIcon $color={activeHeader && location.pathname === '/' ? 'var(--color-white)' : 'var(--color-black)'} />
            )}
        </StyledBurgerMenu>
    );
}

const StyledBurgerMenu = styled.button`
    position: relative;
    z-index: 11;
    cursor: pointer;
    display: none;
    @media (max-width: 992px) {
        display: block;
    }
`;

const StyledMenuIcon = styled(MenuIcon)`
    path {
        stroke: ${({ $color }) => $color};
    }
`;

export default BurgerMenu;
