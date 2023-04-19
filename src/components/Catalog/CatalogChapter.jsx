import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useWindowWidth from 'react-hook-use-window-width';
import styled from 'styled-components';
import { ButtonText } from '../../styles/Button.styled';
import CatalogCard from './CatalogCard';

function CatalogChapter({ title, cards }) {
    const width = useWindowWidth();
    const [slicedItem, setSlicedItem] = useState(4);

    const onSliceItems = () => {
        if (slicedItem !== cards.length) {
            setSlicedItem(cards.length);
        } else {
            setSlicedItem(4);
        }
    };

    useEffect(() => {
        if (width < 1149) {
            setSlicedItem(3);
        } else {
            setSlicedItem(4);
        }
        if (width < 992) {
            setSlicedItem(cards.length);
        }
    }, [width]);

    return (
        <StyledCatalogChapter>
            {width > 992 && <h4>{title && title}</h4>}
            <StyledCatalogChapterWrapper>
                {cards && cards.slice(0, slicedItem).map((product) => <CatalogCard key={nanoid()} {...product} />)}
            </StyledCatalogChapterWrapper>
            {cards.length > 4 && width > 992 && (
                <ButtonText onClick={onSliceItems}>{slicedItem === cards.length ? 'Свернуть' : 'Развернуть'}</ButtonText>
            )}
        </StyledCatalogChapter>
    );
}

const StyledCatalogChapterWrapper = styled.div`
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    grid-gap: 30px;
    @media (max-width: 768px) {
        gap: 16px;
        /* grid-template-columns: repeat(auto-fill, minmax(137px, 1fr)); */
    }
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
