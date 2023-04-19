import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
    padding: 19px 48px;
    background: var(--color-brown);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: all var(--transition);
    @media (max-width: 992px) {
        padding: 10px 23px;
        font-size: 14px;
    }
    &:hover {
        background: var(--color-white);
        color: var(--color-brown);
        outline: 2px solid var(--color-brown);
    }
`;

export const ButtonText = styled.button`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 120%;
    color: var(--color-gray);
    border-bottom: 1px solid var(--color-gray);
    @media (max-width: 992px) {
        display: none;
    }
`;
