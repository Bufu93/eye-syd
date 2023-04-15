import { configureStore } from '@reduxjs/toolkit';
import storeSliceReducer from './slice';

export const store = configureStore({
    reducer: {
        store: storeSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
