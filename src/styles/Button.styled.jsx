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
`;
