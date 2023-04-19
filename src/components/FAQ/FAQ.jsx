import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { Title } from '../../styles/Title.styled';

function FAQ() {
    return (
        <StyledFAQ id="faq">
            <Container>
                <Title>FAQ</Title>
                <StyledFAQWrapper>
                    <StyledFAQList>
                        <StyledFAQItem>
                            <h4>Работайте ли вы на заказ по индивидуальному дизайну?</h4>
                            <p>
                                Да, я занимаюсь проектированием цепей и браслетов на заказ по индивидуальному заказу, в том числе из материалов
                                заказчика.
                            </p>
                        </StyledFAQItem>
                        <StyledFAQItem>
                            <h4>Можно ли у вас заказать копию ювелирных брендов?</h4>
                            <p>
                                Я не занимаюсь изготовлением ювелирных копий. Каждое мое изделие – это авторский симбиоз, основанный на жизненном
                                опыте и энергии металла.
                            </p>
                        </StyledFAQItem>
                        <StyledFAQItem>
                            <h4>Какие материалы вы используете в работе?</h4>
                            <p>
                                Основной материал – это серебро. Я покупаю чистое серебро 999 пробы без примесей напрямую у завода-производителя, а
                                затем для придания ему прочности, добавляю медь до идеальной 930 пробы.
                            </p>
                        </StyledFAQItem>
                        <StyledFAQItem>
                            <h4>Как измерить размер запястья для браслета?</h4>
                            <p>
                                Измерьте запястье в области сгиба сантиметровой лентой – это и будет идеальная длина украшения. Если сантиметровая
                                лента отсутствует, можно обхватить запястье обычной хлопковой нитью, а затем приложить ее к линейке.
                            </p>
                        </StyledFAQItem>
                    </StyledFAQList>
                    <StyledFAQImg>
                        <img src="pic/author2.png" alt="Денис Самарин" width="100%" height="auto" />
                    </StyledFAQImg>
                </StyledFAQWrapper>
            </Container>
        </StyledFAQ>
    );
}

const StyledFAQImg = styled.div`
    @media (max-width: 992px) {
        max-width: 290px;
    }
`;

const StyledFAQList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 565px;
    gap: 32px;
`;

const StyledFAQItem = styled.li`
    display: flex;
    flex-direction: column;
    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        color: var(--color-white);
        margin-bottom: 8px;
        @media (max-width: 992px) {
            font-size: 16px;
        }
    }
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        color: #ebebeb;
        @media (max-width: 992px) {
            font-size: 14px;
        }
    }
`;

const StyledFAQWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        gap: 24px;
    }
`;

const StyledFAQ = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    background: url('./pic/faqbg.jpg') no-repeat center center / cover;
    @media (max-width: 992px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export default FAQ;
