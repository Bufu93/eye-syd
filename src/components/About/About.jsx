import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';

function About() {
    return (
        <StyledAbout id={'about'}>
            <Container>
                <StyledAboutWrapper>
                    <StyledAboutInfo>
                        <Title>Обо мне</Title>
                        <h4>Привет! Меня зовут Денис Самарин, и я пять лет создаю авторские цепи и браслеты ручной работы.</h4>
                        <p>
                            В основе моей концепции лежат сложные конструкции, синтез современных технологий и «ручных» процессов изготовления,
                            энергии металла и жажды новых знаний. Вкладываю душу в каждое изделия и раз за разом совершенствуюсь в своем деле. Мое
                            личное достижение – цепь Бисмарк, весом 600 грамм и диаметр проволоки в 3,9 мм (при стандартных - 1-2,5 мм). Это была мега
                            сложная и кропотливая работа.
                        </p>
                        <p>
                            Окончил Художественно-профессиональный лицей Санкт-Петербурга имени Карла Фаберже. Немного поработал на производстве
                            цепей, затем стал снимать помещение, оборудовал его под мастерскую.
                        </p>
                        <p>
                            Цепи и браслеты из массивного, необработанного металла – мой личный криптонит. Каждое – несет в себе маленькую историю –
                            от зарождения идеи дизайна до его воплощения в серебре.
                        </p>
                    </StyledAboutInfo>
                    <StyledAboutImg>
                        <img src="./pic/author.png" alt="Денис Самарин" width="100%" height="auto" />
                    </StyledAboutImg>
                </StyledAboutWrapper>
            </Container>
        </StyledAbout>
    );
}

const StyledAboutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const StyledAboutInfo = styled.div`
    max-width: 580px;
    h4 {
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
        margin-bottom: 16px;
    }
    p {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
    }
`;
const StyledAboutImg = styled.div``;

const StyledAbout = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
`;

export default About;
