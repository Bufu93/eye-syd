import React from 'react';
import styled from 'styled-components';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Catalog from '../Catalog/Catalog';
import Hero from '../Hero/Hero';

function MainPage() {
    return (
        <>
            <StyledMain>
                <Hero />
                <About />
                <Advantages />
                <Catalog />
            </StyledMain>
        </>
    );
}

const StyledMain = styled.main``;

export default MainPage;
