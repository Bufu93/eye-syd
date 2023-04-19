import styled from 'styled-components';
import { ButtonPrimary } from '../../styles/Button.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFormType, setModal } from '../../redux/slice';
import ColorSelect from '../UI/ColorSelect/ColorSelect';

function CatalogDetailsInfo() {
    const dispatch = useDispatch();
    const currentProduct = useSelector((state) => state.store.currentProduct);

    const onOrder = () => {
        dispatch(setFormType('order'));
        dispatch(setModal('true'));
    };

    return (
        <StyledCatalogDetailsInfo>
            <StyledCatalogDetailsInfoWrapper>
                <h3 className="detTitle">{currentProduct.title && currentProduct.title}</h3>
                <ColorSelect />
                <div className="detReal">На заказ</div>
                <div className="detSpec">
                    вес от: <span className="detText">{currentProduct.weight && currentProduct.weight}</span>
                </div>
                <div className="detSpec">
                    металл: <span className="detText">{currentProduct.metal && currentProduct.metal}</span>
                </div>
                <div className="detSpec">
                    цена от: <span className="detText-brown">{currentProduct.price && currentProduct.price}</span>
                </div>
            </StyledCatalogDetailsInfoWrapper>
            <ButtonPrimary onClick={onOrder}>Заказать</ButtonPrimary>
        </StyledCatalogDetailsInfo>
    );
}

const StyledCatalogDetailsInfoWrapper = styled.div`
    .detTitle {
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        color: var(--color-black);
        margin-bottom: 32px;
        @media (max-width: 992px) {
            margin-bottom: 10px;
            font-size: 18px;
        }
    }
    .detColor {
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        color: var(--color-black);
        margin-bottom: 40px;
        @media (max-width: 992px) {
            margin-bottom: 16px;
            font-size: 14px;
        }
    }
    .detReal {
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        text-transform: uppercase;
        color: var(--color-brown);
        margin-bottom: 40px;
        @media (max-width: 992px) {
            margin-bottom: 16px;
            font-size: 18px;
        }
    }
    .detSpec {
        font-weight: 400;
        font-size: 15px;
        line-height: 120%;
        color: var(--color-black);
        margin-bottom: 24px;
        display: flex;
        gap: 8px;
        align-items: flex-end;
    }
    .detText {
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        color: var(--color-black);
        @media (max-width: 992px) {
            font-size: 18px;
        }
    }
    .detText-brown {
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        color: var(--color-brown);
        @media (max-width: 992px) {
            font-size: 18px;
        }
    }
`;

const StyledCatalogDetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    button {
        position: absolute;
        margin-top: auto;
        align-self: flex-start;
        bottom: 0;
        padding: 15px 49px;
        @media (max-width: 992px) {
            align-self: center;
        }
    }
`;

export default CatalogDetailsInfo;
