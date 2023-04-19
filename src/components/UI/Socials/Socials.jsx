import React from 'react';
import styled from 'styled-components';
import { ReactComponent as VkIcon } from '../../../assets/vk.svg';
import { ReactComponent as InstIcon } from '../../../assets/inst.svg';
import { ReactComponent as YoutubeIcon } from '../../../assets/youtube.svg';

function Socials() {
    return (
        <StyledSocials>
            <StyledSocialsLink href="https://work.vk.com/eye_syd" target={'_blank'}>
                <VkIcon />
            </StyledSocialsLink>
            <StyledSocialsLink href="https://instagram.com/eye_syd?igshid=YmMyMTA2M2Y=" target={'_blank'}>
                <InstIcon />
            </StyledSocialsLink>
            <StyledSocialsLink href="https://www.youtube.com/@eyesyd380" target={'_blank'}>
                <YoutubeIcon />
            </StyledSocialsLink>
        </StyledSocials>
    );
}

const StyledSocialsLink = styled.a`
    cursor: pointer;
    path {
        transition: fill var(--transition);
    }
    &:hover {
        path {
            fill: var(--color-brown);
        }
    }
`;

const StyledSocials = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 34px;
`;

export default Socials;
