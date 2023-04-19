import styled from 'styled-components';
import { StyledModal, StyledModalContent } from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { ButtonPrimary } from '../../../styles/Button.styled';
import { ReactComponent as SuccessIcon } from '../../../assets/suc.svg';
import { ReactComponent as FailureIcon } from '../../../assets/fail.svg';
import { setThxMessage } from '../../../redux/slice';

function ThxMessage() {
    const dispatch = useDispatch();
    const { thxMessageType } = useSelector((state) => state.store);

    const Ok = () => {
        dispatch(setThxMessage(false));
    };

    return (
        <StyledModal>
            <StyledModalContent>
                <StyledThxMessage>
                    {thxMessageType ? <SuccessIcon /> : <FailureIcon />}
                    <h4>{thxMessageType ? 'Ваша заявка отправлена, мы с вами свяжемся' : 'Что-то пошло не так. Попробуйте позже'}</h4>
                    <ButtonPrimary onClick={Ok}>OK!</ButtonPrimary>
                </StyledThxMessage>
            </StyledModalContent>
        </StyledModal>
    );
}

const StyledThxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 290px;
    gap: 32px;
    h4 {
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        text-align: center;
        color: #3a3a3a;
    }
`;

export default ThxMessage;
