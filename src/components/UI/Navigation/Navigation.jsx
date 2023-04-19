import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { burgerClose } from '../../../redux/slice';
import { useLocation, Link } from 'react-router-dom';

function Navigation({ $colorf, $colorb }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const { activeHeader, activeBurger } = useSelector((state) => state.store);

    return (
        <StyledNavigation>
            <StyledLink
                onClick={() => dispatch(burgerClose())}
                $color={activeHeader && location.pathname === '/' && !activeBurger}
                $colorf={$colorf}
                $colorb={$colorb}
                to="/#about"
            >
                Обо мне
            </StyledLink>
            <StyledLink
                onClick={() => dispatch(burgerClose())}
                $color={activeHeader && location.pathname === '/' && !activeBurger}
                $colorf={$colorf}
                $colorb={$colorb}
                to="/#catalog"
            >
                Каталог
            </StyledLink>
            <StyledLink
                onClick={() => dispatch(burgerClose())}
                $color={activeHeader && location.pathname === '/' && !activeBurger}
                $colorf={$colorf}
                $colorb={$colorb}
                to="/#faq"
            >
                Вопросы
            </StyledLink>
        </StyledNavigation>
    );
}

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 414px;
    @media (max-width: 992px) {
        flex-direction: column;
        gap: 24px;
        min-width: 100%;
    }
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    color: ${({ $color }) => $color && 'var(--color-white)'};
    color: ${({ $colorf }) => $colorf && 'var(--color-white)'};
    color: ${({ $colorb }) => $colorb && 'var(--color-black)'};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    transition: color var(--transition);
    &:hover {
        color: var(--color-brown);
    }
`;

export default Navigation;
