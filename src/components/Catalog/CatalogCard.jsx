import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../../styles/Button.styled';
import { useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';

function CatalogCard(product) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const findMainPhoto = product.photos.find((f) => f.main === true);

    return (
        <StyledCatalogCard>
            <StyledCatalogCardImg>
                <img src={findMainPhoto.src && findMainPhoto.src} alt={product.title} width="100%" height="100%" />
            </StyledCatalogCardImg>

            <StyledCatalogCardInfo>
                <h5>{product.title && product.title}</h5>
                <span>
                    от
                    <small>{product.price}</small>
                </span>
                <ButtonPrimary
                    onClick={() => {
                        dispatch(setCurrentProduct(product));
                        navigate('product');
                    }}
                >
                    Подробнее
                </ButtonPrimary>
            </StyledCatalogCardInfo>
        </StyledCatalogCard>
    );
}

const StyledCatalogCardInfo = styled.div`
    padding: 16px 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    h5 {
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        color: var(--color-black);
    }
    span {
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        color: var(--color-black);
        small {
            font-weight: 700;
            font-size: 22px;
            line-height: 120%;
            color: var(--color-brown);
            margin-left: 8px;
        }
    }
`;

const StyledCatalogCardImg = styled.div``;

const StyledCatalogCard = styled.article`
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
`;

export default CatalogCard;
