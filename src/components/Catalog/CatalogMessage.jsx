import React from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../../styles/Button.styled';
import { useDispatch } from 'react-redux';
import { setFormType, setModal } from '../../redux/slice';

function CatalogMessage() {
    const dispatch = useDispatch();
    return (
        <StyledCatalogMessage>
            <h4>Не нашли в каталоге? </h4>
            <p>Оставьте заявку на создание кастомного изделия </p>
            <ButtonPrimary
                onClick={() => {
                    dispatch(setFormType('custom'));
                    dispatch(setModal(true));
                }}
            >
                Создать кастомное изделие
            </ButtonPrimary>
        </StyledCatalogMessage>
    );
}

const StyledCatalogMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    padding: 40px;
    text-align: center;
    @media (max-width: 768px) {
        padding: 24px 10px;
    }
    h4 {
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--color-black);
        margin-bottom: 16px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.02em;
        color: var(--color-black);
        margin-bottom: 32px;
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

export default CatalogMessage;
