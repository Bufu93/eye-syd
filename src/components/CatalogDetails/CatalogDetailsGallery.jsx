import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';

function CatalogDetailsGallery() {
    const { currentProduct, currentProductColor } = useSelector((state) => state.store);
    const mainColor = currentProduct.photos.find((photo) => photo.main === true)?.color;
    const [filteredPhotos, setFilteredPhotos] = useState(
        currentProduct.photos.filter((photo) => photo.color.toLowerCase() === mainColor.toLowerCase())
    );
    const [currentSlide, setCurrentSlide] = useState(filteredPhotos.find((f) => f.main === true));
    const [isFade, setIsFade] = useState(false);

    const handleImageLoad = () => {
        setIsFade(true);
    };

    useEffect(() => {
        setIsFade(false);
    }, [currentSlide]);

    useEffect(() => {
        setFilteredPhotos(currentProduct.photos.filter((photo) => photo.color.toLowerCase() === currentProductColor.toLowerCase()));
        setCurrentSlide(currentProduct.photos.find((f) => f.main === true && f.color.toLowerCase() === currentProductColor.toLowerCase()));
    }, [currentProductColor]);

    return (
        <StyledCatalogDetailsGallery>
            <GalleryMainPhoto className={isFade ? 'active' : ''}>
                <img src={currentSlide.src} width="100%" height="100%" alt="Продукт" onLoad={handleImageLoad} />
            </GalleryMainPhoto>
            <GalleryWrapper>
                {filteredPhotos.length > 1 &&
                    filteredPhotos.map((photo) => (
                        <GallerySecondPhoto active={currentSlide.src === photo.src} key={nanoid()} onClick={() => setCurrentSlide(photo)}>
                            <img src={photo.src} width="100%" height="100%" alt="Продукт" />
                        </GallerySecondPhoto>
                    ))}
            </GalleryWrapper>
        </StyledCatalogDetailsGallery>
    );
}

const GalleryWrapper = styled.div`
    display: flex;
    jusstify-content: space-between;
    gap: 20px;
    @media (max-width: 992px) {
        gap: 15px;
    }
`;

const GalleryMainPhoto = styled.div`
    box-shadow: var(--shadow);
    &.active {
        img {
            animation: fade 0.5s linear;
        }
    }
    img {
        max-height: 475px;
        min-height: 290px;
        max-wdith: 475px;
        border-radius: var(--radius);
    }
`;

const GallerySecondPhoto = styled.div`
    cursor: pointer;
    box-shadow: var(--shadow);

    object-fit: cover;
    img {
        max-height: 146px;
        min-height: 87px;
        max-width: 146px;
        border-radius: var(--radius);
    }
    opacity: ${({ active }) => (active ? '0.5' : '1')};
`;

const StyledCatalogDetailsGallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 475px;
    min-width: 290px;
    @media (max-width: 992px) {
        gap: 15px;
        align-self: center;
    }
`;

export default CatalogDetailsGallery;
