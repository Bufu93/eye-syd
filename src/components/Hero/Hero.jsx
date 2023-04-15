import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';

function Hero() {
    return (
        <StyledHero>
            <VideoContainer>
                <div className="opacity"></div>
                <ReactPlayer url="video/hero-video.mp4" autoplay={true} playing={true} muted={true} loop={true} width="100%" height={'auto'} />
            </VideoContainer>
            <Container>
                <StyledHeroInfo>
                    <h1>Авторские цепи и браслеты из серебра от Дениса Самарина</h1>
                    <p>Вдохновленные андеграундом — воплощенные в благородном металле</p>
                </StyledHeroInfo>
            </Container>
        </StyledHero>
    );
}

const StyledHeroInfo = styled.div`
    width: 100%;

    h1 {
        font-family: var(--font-secondary);
        font-style: normal;
        font-weight: 700;
        font-size: 46px;
        line-height: 130%;
        color: var(--color-white);
        margin-bottom: 32px;
        max-width: 730px;
    }
    p {
        font-weight: 400;
        font-size: 28px;
        line-height: 130%;
        color: #ebebeb;
        max-width: 730px;
    }
`;

const StyledHero = styled.section`
    position: relative;
    height: 100vh;
    background: transparent;
    padding-top: 240px;
`;

const VideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -3;
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
