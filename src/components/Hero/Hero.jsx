import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import useWindowWidth from 'react-hook-use-window-width';

function Hero() {
    const width = useWindowWidth();

    return (
        <StyledHero>
            <VideoContainer>
                <div className="opacity"></div>
                {width > 992 && (
                    <ReactPlayer url="video/hero-video.mp4" autoPlay={true} playing={true} muted={true} loop={true} width="100%" height={'auto'} />
                )}
            </VideoContainer>
            <HeroContainer>
                <StyledHeroInfo>
                    <h1>Авторские цепи и браслеты из серебра от Дениса Самарина</h1>
                    <p>Вдохновленные андеграундом — воплощенные в благородном металле</p>
                </StyledHeroInfo>
            </HeroContainer>
        </StyledHero>
    );
}

const HeroContainer = styled(Container)`
    position: absolute;
    top: 240px;
    left: 0;
    right: 0;
    @media (max-width: 992px) {
        top: 150px;
    }
`;

const StyledHeroInfo = styled.div`
    @media (max-width: 992px) {
        max-width: 500px;
        margin: 0 auto;
    }
    h1 {
        font-family: var(--font-secondary);
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 130%;
        color: var(--color-white);
        margin-bottom: 32px;
        max-width: 730px;
        @media (max-width: 992px) {
            font-size: 25px;
            text-align: center;
            max-width: none;
        }
    }
    p {
        font-weight: 400;
        font-size: 28px;
        line-height: 130%;
        color: #ebebeb;
        max-width: 730px;
        @media (max-width: 992px) {
            font-size: 16px;
            text-align: center;
            max-width: none;
        }
    }
`;

const StyledHero = styled.section`
    position: relative;
    height: 100vh;
    background: transparent;
`;

const VideoContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
    z-index: -3;
    @media (max-width: 992px) {
        background: url('./pic/banner_mobile.jpg') no-repeat center center / cover;
    }
    video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1;
        object-fit: cover;
    }
    .opacity {
        position: absolute;
        background: linear-gradient(89.98deg, rgba(40, 40, 40, 0.8) 43.86%, rgba(56, 56, 56, 0.32) 99.98%);
        width: 100%
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
`;

export default Hero;
