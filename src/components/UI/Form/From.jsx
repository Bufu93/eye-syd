import styled from 'styled-components';
import { ButtonPrimary } from '../../../styles/Button.styled';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setModal, setThxMessage, setThxMessageType } from '../../../redux/slice';

const _token = '6262669647:AAHxgGOOofo9eCO1cKkCArfBiSgh3J-oDAU';
const _chat_id = '-1001984275664';

function From() {
    const dispatch = useDispatch();
    const { formType, currentProduct, currentProductColor } = useSelector((state) => state.store);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        let FromData = '';
        if (formType === 'order') {
            FromData = `<b>Заявка на обратную связь с ВЫБРАННЫМ изделием:</b>%0A %0A Имя: ${data.name} %0A Телефон: ${data.phone} %0A Изделие: ${currentProduct.title} %0A Цвет: ${currentProductColor} %0A Коментарий: ${data.comment} `;
        } else if (formType === 'custom') {
            FromData = `<b>Заявка на обратную связь с КАСТОМНЫМ изделием:</b>%0A %0A Имя: ${data.name} %0A Телефон: ${data.phone}  %0A Коментарий: ${data.comment} `;
        } else {
            FromData = `<b>Заявка на обратную связь:</b>%0A %0A Имя: ${data.name} %0A Телефон: ${data.phone} %0A Коментарий: ${data.comment} `;
        }

        axios
            .post(`https://api.telegram.org/bot${_token}/sendMessage?chat_id=${_chat_id}&parse_mode=html&text=${FromData}`)
            .then(function () {
                dispatch(setModal(false));
                dispatch(setThxMessageType(true));
                dispatch(setThxMessage(true));
            })
            .catch(function (error) {
                dispatch(setModal(false));
                dispatch(setThxMessageType(false));
                dispatch(setThxMessage(true));
            })
            .finally(() => {
                <p>Loading...</p>;
            });
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <label>
                Ваше имя
                <input
                    {...register('name', {
                        required: 'Поле обязательно для заполнений.',
                    })}
                />
            </label>
            <small>{errors.name?.message}</small>
            <Controller
                name="phone"
                control={control}
                rules={{
                    required: 'Поле обязательно для заполнений.',
                    minLength: {
                        value: 18,
                        message: 'Ведите корректный номер телефона',
                    },
                }}
                render={({ field }) => (
                    <label>
                        Телефон
                        <IMaskInput {...field} mask="+{7} (000) 000-00-00" />
                    </label>
                )}
            />

            <small>{errors.phone?.message}</small>
            <label>
                Комметарий
                <textarea
                    {...register('comment', {
                        maxLength: {
                            value: 500,
                            message: 'Максимальное кол-во символов 500',
                        },
                    })}
                />
            </label>
            <small>{errors.comment?.message}</small>

            <ButtonPrimary type="submit">Отправить</ButtonPrimary>
        </StyledForm>
    );
}

const StyledForm = styled.form`
    max-width: 290px;
    width: 100%;
    display: flex;
    flex-direction: column;
    button{
        margin-top: 32px;
        @media (max-width: 992px) {
            padding: 15px 42px
        }
    };
    label {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    input,
    textarea {
        border: 0.5px solid #5e5e5e;
        box-shadow: var(--shadow);
        border-radius: var(--radius);
        padding: 12px 10px;
    }
    textarea {
        resize: none;
    }
    small {
        display: block
        font-weight: 500;
        font-size: 12px;
        line-height: 120%;
        color: #ba1d42;
        padding-bottom: 8px;
    }
`;

export default From;
