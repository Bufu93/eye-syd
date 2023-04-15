import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import styled from 'styled-components';
import { ButtonText } from '../../styles/Button.styled';
import CatalogCard from './CatalogCard';

function CatalogChapter({ title, cards }) {
    return (
        <StyledCatalogChapter>
            <h4>{title && title}</h4>
            <StyledCatalogChapterWrapper>
                {cards.map((item) => (
                    <CatalogCard key={nanoid()} {...item} />
                ))}
            </StyledCatalogChapterWrapper>
            <ButtonText>Развернуть</ButtonText>
        </StyledCatalogChapter>
    );
}

const StyledCatalogChapterWrapper = styled.div`
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    grid-gap: 30px;
`;

const StyledCatalogChapter = styled.div`
    margin-bottom: 32px;
    h4 {
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: var(--color-black);
        margin-bottom: 24px;
    }
`;

export default CatalogChapter;
