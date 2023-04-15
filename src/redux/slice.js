import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeHeader: JSON.parse(localStorage.getItem('activeHeader')) || true,
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setActiveHeader: (state, action) => {
            state.activeHeader = action.payload;
            localStorage.setItem('activeHeader', JSON.stringify(state.activeHeader));
        },
    },
});

export const { setActiveHeader } = storeSlice.actions;
export default storeSlice.reducer;
