import styled from 'styled-components';
import Form from '../Form/From';
import { ReactComponent as CloseIcon } from '../../../assets/x.svg';
import { Title } from '../../../styles/Title.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFormType, setModal } from '../../../redux/slice';

function Modal() {
    const dispatch = useDispatch();
    const { formType, currentProduct, currentProductColor } = useSelector((state) => state.store);

    const onClose = () => {
        dispatch(setModal(false));
        dispatch(setFormType(''));
    };

    return (
        <StyledModal>
            <StyledModalContent>
                <ButtonClose onClick={onClose} />
                {formType === 'order' && (
                    <StyledModalInfo>
                        <Title>Вы выбрали:</Title>
                        <h4>{currentProduct.title && currentProduct.title}</h4>
                        <div>Цвет: {currentProductColor && currentProductColor}</div>
                    </StyledModalInfo>
                )}
                {formType === 'order' ? (
                    <StyledFormTitles>
                        <h4>Заполните контактные данные и укажите пожелания</h4>
                        <p>Мы рассчитаем стоимость изделия с учетом Ваших пожеланий и свяжемся с Вами!</p>
                    </StyledFormTitles>
                ) : (
                    <StyledFormTitles>
                        <h4>Заполните контактные данные и укажите пожелания</h4>
                    </StyledFormTitles>
                )}
                <Form />
            </StyledModalContent>
        </StyledModal>
    );
}

const StyledFormTitles = styled.div`
    text-align: center;
    margin-bottom: 32px;
    max-width: 400px;
    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        color: #3a3a3a;
        margin-bottom: 16px;
        @media (max-width: 768px) {
            font-size: 16px;
            margin-bottom: 10px;
        }
    }
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 150%;
        color: #5d5d5d;
        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`;

const StyledModalInfo = styled.div`
    width: 100%;
    text-align: center;
    h4 {
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        color: #3a3a3a;
        margin-bottom: 8px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
    div {
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        color: #5d5d5d;
        margin-bottom: 32px;
    }
`;

const ButtonClose = styled(CloseIcon)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
`;

export const StyledModalContent = styled.div`
    position: relative;
    width: 100%;
    background: var(--color-white);
    max-width: 848px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    max-height: 100%;
    @media (max-width: 768px) {
        padding: 52px 20px 32px 20px;
    }
`;

export const StyledModal = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(58, 58, 58, 0.8);
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export default Modal;
