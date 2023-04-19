import React from 'react';
import styled from 'styled-components';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Catalog from '../Catalog/Catalog';
import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';

function MainPage() {
    return (
        <>
            <StyledMain>
                <Hero />
                <About />
                <Advantages />
                <Catalog />
                <FAQ />
            </StyledMain>
        </>
    );
}

export const StyledMain = styled.main`
    flex: 1 0 auto;
`;

export default MainPage;
