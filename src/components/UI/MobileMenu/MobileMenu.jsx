import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../../../styles/Button.styled';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { burgerClose, setModal } from '../../../redux/slice';

function MobileMenu() {
    const dispatch = useDispatch();

    return (
        <StyledMobileMenu>
            <Logo w={'65px'} h={'65px'} />
            <Navigation colorb />
            <ButtonPrimary
                onClick={() => {
                    dispatch(burgerClose());
                    dispatch(setModal(true));
                }}
            >
                Связаться
            </ButtonPrimary>
        </StyledMobileMenu>
    );
}

const StyledMobileMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-white);
    animation: fade 0.1s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    padding-top: 24px;
`;

export default MobileMenu;
