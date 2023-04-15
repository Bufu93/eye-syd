import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';

function Advantages() {
    return (
        <StyledAdvantages>
            <Container>
                <Title>Преимущества</Title>
                <StyledAdvantagesWrapper>
                    <StyledAdvantagesItem>
                        <h4>Исключительность</h4>
                        <p>
                            Каждое изделие – исключительное. Создаю уникальные дизайны в единичных экземплярах или реализую идеи и пожелания заказчика
                            в эксклюзивное украшение.
                        </p>
                    </StyledAdvantagesItem>
                    <StyledAdvantagesItem>
                        <h4>Скрупулезность</h4>
                        <p>Филигранный подход, основанный на сочетании тонкой ручной работы, инновационного оборудования и новейших подходов.</p>
                    </StyledAdvantagesItem>
                    <StyledAdvantagesItem>
                        <h4>Качество</h4>
                        <p>
                            Браслеты и цепи изготавливаются из высококачественного заводского серебра с добавлением меди для ля придания драгметаллу
                            большей твердости.
                        </p>
                    </StyledAdvantagesItem>
                </StyledAdvantagesWrapper>
            </Container>
        </StyledAdvantages>
    );
}

const StyledAdvantagesItem = styled.div`
    max-width: 290px;
    h4 {
        font-family: var(--font-secondary);
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: var(--color-white);
        margin-bottom: 16px;
    }
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        color: #ebebeb;
    }
`;

const StyledAdvantagesWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const StyledAdvantages = styled.section`
    padding-top: 48px;
    padding-bottom: 80px;
    background: url('./pic/bg.jpg') no-repeat center center / cover;
`;

export default Advantages;
