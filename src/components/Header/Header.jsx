import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styled from 'styled-components';
import { setActiveHeader } from '../../redux/slice';
import { ButtonPrimary } from '../../styles/Button.styled';
import { Container } from '../../styles/Container.styled';
import Logo from '../UI/Logo/Logo';
import Navigation from '../UI/Navigation/Navigation';

function Header() {
    const dispatch = useDispatch();
    const activeHeader = useSelector((state) => state.store.activeHeader);

    useEffect(() => {
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
    }, []);

    return (
        <StyledHeader color={activeHeader}>
            <Container>
                <StyledHeaderWrapper>
                    <Logo color={activeHeader ? 'var(--color-white)' : 'var(--color-black)'} />
                    <Navigation />
                    <ButtonPrimary>Связаться</ButtonPrimary>
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
    background: ${({ color }) => (color ? 'var(--color-white-opac)' : 'var(--color-white)')};
    box-shadow: 0px 12px 20px rgba(58, 58, 58, 0.8);
    min-height: 120px;
    padding: 10px 0;
    border-bottom: 1px solid var(--color-white);
    transition: all var(--transition);
`;

const StyledHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default Header;
