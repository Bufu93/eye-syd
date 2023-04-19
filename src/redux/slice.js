import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeHeader: JSON.parse(localStorage.getItem('activeHeader')) || true,
    activeBurger: JSON.parse(localStorage.getItem('activeBurger')) || false,
    currentProduct: JSON.parse(localStorage.getItem('currentProduct')) || {},
    currentProductColor: JSON.parse(localStorage.getItem('currentProductColor')) || '',
    isOpenModal: JSON.parse(localStorage.getItem('isOpenModal')) || false,
    body: JSON.parse(localStorage.getItem('body')) || false,
    formType: JSON.parse(localStorage.getItem('formType')) || '',
    thxMessage: JSON.parse(localStorage.getItem('thxMessage')) || false,
    thxMessageType: JSON.parse(localStorage.getItem('thxMessageType')) || true,
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setThxMessage: (state, action) => {
            state.thxMessage = action.payload;
            if (state.thxMessage === true) {
                state.body = true;
            } else {
                state.body = false;
            }
            localStorage.setItem('body', JSON.stringify(state.body));
            localStorage.setItem('thxMessage', JSON.stringify(state.thxMessage));
        },
        setThxMessageType: (state, action) => {
            state.thxMessageType = action.payload;
            localStorage.setItem('thxMessageType', JSON.stringify(state.thxMessageType));
        },
        setActiveHeader: (state, action) => {
            state.activeHeader = action.payload;
            localStorage.setItem('activeHeader', JSON.stringify(state.activeHeader));
        },
        toogleBurger: (state) => {
            state.activeBurger = !state.activeBurger;
            if (state.activeBurger === true) {
                state.body = true;
            } else {
                state.body = false;
            }
            localStorage.setItem('body', JSON.stringify(state.body));
            localStorage.setItem('activeBurger', JSON.stringify(state.activeBurger));
        },
        burgerClose: (state) => {
            state.activeBurger = false;
            document.querySelector('body').style.overflow = 'auto';
            localStorage.setItem('activeBurger', JSON.stringify(state.activeBurger));
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
            state.currentProductColor = state.currentProduct.colors[0];
            localStorage.setItem('currentProduct', JSON.stringify(state.currentProduct));
            localStorage.setItem('currentProductColor', JSON.stringify(state.currentProductColor));
        },
        setCurrentProductColor: (state, action) => {
            state.currentProductColor = action.payload;
            localStorage.setItem('currentProductColor', JSON.stringify(state.currentProductColor));
        },
        setModal: (state, action) => {
            state.isOpenModal = action.payload;
            if (state.isOpenModal === true) {
                state.body = true;
            } else {
                state.body = false;
            }
            localStorage.setItem('body', JSON.stringify(state.body));
            localStorage.setItem('isOpenModal', JSON.stringify(state.isOpenModal));
        },

        setFormType: (state, action) => {
            state.formType = action.payload;
            localStorage.setItem('formType', JSON.stringify(state.formType));
        },
    },
});

export const {
    setActiveHeader,
    toogleBurger,
    burgerClose,
    setCurrentProduct,
    setModal,
    setFormType,
    setThxMessage,
    setThxMessageType,
    setCurrentProductColor,
} = storeSlice.actions;
export default storeSlice.reducer;
