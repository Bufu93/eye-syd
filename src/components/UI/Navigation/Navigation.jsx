import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux/es/exports';

function Navigation() {
    const activeHeader = useSelector((state) => state.store.activeHeader);

    return (
        <StyledNavigation color={activeHeader}>
            <StyledLink color={activeHeader} to="about" smooth={true} duration={500} offset={-80}>
                Обо мне
            </StyledLink>
            <StyledLink color={activeHeader} to="catalog" smooth={true} duration={500} offset={-80}>
                Каталог
            </StyledLink>
            <StyledLink color={activeHeader} to="faq" smooth={true} duration={500} offset={-80}>
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
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    color: ${({ color }) => color && 'var(--color-white)'};
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
