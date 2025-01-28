import { configureStore } from '@reduxjs/toolkit';
import latestBookReducer from './LatestBookSlicer';
import LoadingReducer from './LoadingSlicer';
export const store = configureStore({
    reducer: {
        latestBook: latestBookReducer,
        loading: LoadingReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
