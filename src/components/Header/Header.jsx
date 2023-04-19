import { useEffect } from 'react';
import useWindowWidth from 'react-hook-use-window-width';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { burgerClose, setActiveHeader, setModal } from '../../redux/slice';
import { ButtonPrimary } from '../../styles/Button.styled';
import { Container } from '../../styles/Container.styled';
import BurgerMenu from '../UI/BurgerMenu/BurgerMenu';
import Logo from '../UI/Logo/Logo';
import MobileMenu from '../UI/MobileMenu/MobileMenu';
import Navigation from '../UI/Navigation/Navigation';

function Header() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { activeHeader, activeBurger } = useSelector((state) => state.store);
    const width = useWindowWidth();

    useEffect(() => {
        if (location.pathname === '/') {
            const handleScroll = () => {
                const block = document.getElementById('about');
                const position = block.getBoundingClientRect().top;
                if (position > window.innerHeight) {
                    dispatch(setActiveHeader(true));
                } else {
                    dispatch(setActiveHeader(false));
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [location]);

    return (
        <StyledHeader $color={activeHeader && location.pathname === '/'}>
            <Container>
                <StyledHeaderWrapper>
                    <Logo
                        $w={width < 992 && '65px'}
                        $h={width < 992 && '65px'}
                        $color={activeHeader && location.pathname === '/' ? 'var(--color-white)' : 'var(--color-black)'}
                    />
                    {width > 992 && (
                        <>
                            <Navigation />
                            <ButtonPrimary
                                onClick={() => {
                                    dispatch(setModal(true));
                                }}
                            >
                                Связаться
                            </ButtonPrimary>
                        </>
                    )}
                    {activeBurger && <MobileMenu />}
                    <BurgerMenu />
                </StyledHeaderWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 3;
    background: ${({ $color }) => ($color ? 'var(--color-white-opac)' : 'var(--color-white)')};
    box-shadow: 0px 12px 20px rgba(58, 58, 58, 0.8);
    min-height: 120px;
    padding: 10px 0;
    border-bottom: 1px solid var(--color-white);
    transition: all var(--transition);
    @media (max-width: 992px) {
        min-height: 66px;
    }
`;

const StyledHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Header;
