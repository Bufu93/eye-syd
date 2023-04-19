import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProductColor } from '../../../redux/slice';

function ColorSelect() {
    const dispatch = useDispatch();
    const { currentProduct, currentProductColor } = useSelector((state) => state.store);
    const options = currentProduct.colors.map((i) => ({ value: i, label: i }));

    const onChangeValue = (value) => {
        dispatch(setCurrentProductColor(value.value));
    };

    return (
        <Select
            options={options}
            defaultValue={{ value: currentProductColor, label: currentProductColor }}
            styles={customStylesMain}
            onChange={(value) => onChangeValue(value)}
            components={{
                IndicatorSeparator: () => null,
            }}
        />
    );
}

export const customStylesMain = {
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'white',
        width: '290px',
        border: 'none',
        marginTop: '0px',
        borderRadius: 'var(--radius)',
        top: '0px',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '150%',
        boxShadow: 'var(--shadow)',
        zIndex: '3',
    }),
    control: (defaultStyles, state) => ({
        ...defaultStyles,
        width: '290px',
        height: '27px',
        backgroundColor: state.menuIsOpen ? 'white' : 'transparent',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '150%',
        cursor: 'pointer',
        color: 'var(--color-black)',
        border: 'var(--border-input)',
        borderRadius: 'var(--radius)',
        paddingTop: 0,
        paddingBottom: 0,
        caretColor: 'transparent !important',
        boxShadow: 'var(--shadow)',
        marginBottom: '32px',
    }),
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        backgroundColor: 'var(--colors-bg-first)',
        opacity: 1,
        paddingTop: '3px',
        paddingLeft: '11px',
        borderRadius: 'var(--radius)',
        transition: 'color var(--transition)',
        '&:hover': {
            backgroundColor: 'var(--colors-white)',
            color: 'var(--color-brown)',
            cursor: 'pointer',
        },
        color: state.menuIsOpen ? 'var(--color-brown)' : 0,
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        svg: {
            fill: 'var(--color-brown)',
        },
    }),
    valueContainer: (defaultStyles, state) => ({
        ...defaultStyles,
        padding: 0,
        paddingLeft: '10px',
        paddingRight: '30px',
    }),
    input: (defaultStyles, state) => ({
        ...defaultStyles,
        margin: 0,
        padding: 0,
    }),
    singleValue: (defaultStyles, state) => ({
        ...defaultStyles,
        margin: 0,
        padding: 0,
    }),
};

export default ColorSelect;
