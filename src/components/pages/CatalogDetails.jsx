import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import CatalogDetailsGallery from '../CatalogDetails/CatalogDetailsGallery';
import CatalogDetailsInfo from '../CatalogDetails/CatalogDetailsInfo';
import { StyledMain } from './MainPage';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/arrow.svg';

function CatalogDetails() {
    const navigate = useNavigate();

    return (
        <StyledMain>
            <StyledCatalogDetails>
                <Container>
                    <StyledArrowBack onClick={() => navigate('/')} />
                    <StyledCatalogDetailsWrapper>
                        <CatalogDetailsGallery />
                        <CatalogDetailsInfo />
                    </StyledCatalogDetailsWrapper>
                </Container>
            </StyledCatalogDetails>
        </StyledMain>
    );
}

const StyledArrowBack = styled(ArrowBack)`
    cursor: pointer;
`;

const StyledCatalogDetailsWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 60px;
    gap: 30px;
    @media (max-width: 992px) {
        flex-direction: column;
        padding-bottom: 60px;
        padding-top: 26px;
    }
`;

const StyledCatalogDetails = styled.section`
    margin-top: 120px;
    padding-top: 60px;
    padding-bottom: 100px;
    @media (max-width: 992px) {
        margin-top: 68px;
        padding-bottom: 40px;
    }
`;

export default CatalogDetails;
