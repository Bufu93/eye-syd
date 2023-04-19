import styled from 'styled-components';
import { ButtonPrimary } from '../../styles/Button.styled';
import { Container } from '../../styles/Container.styled';
import Logo from '../UI/Logo/Logo';
import Navigation from '../UI/Navigation/Navigation';
import Socials from '../UI/Socials/Socials';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slice';

function Footer() {
    const dispatch = useDispatch();

    return (
        <StyledFooter>
            <Container>
                <StyledFooterWrapper>
                    <Logo $color={'var(--color-brown)'} />
                    <Navigation $colorf />
                    <Socials />
                    <ButtonPrimary onClick={() => dispatch(setModal(true))}>Связаться</ButtonPrimary>
                </StyledFooterWrapper>
            </Container>
        </StyledFooter>
    );
}

const StyledFooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
        flex-direction: column;
        gap: 32px;
    }
`;

const StyledFooter = styled.footer`
    padding-top: 20px;
    padding-bottom: 20px;
    background: #080808;
    flex: 0 0 auto;
    @media (max-width: 992px) {
        padding-top: 32px;
        padding-bottom: 40px;
    }
`;

export default Footer;
