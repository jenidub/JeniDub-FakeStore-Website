import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import { loadState, saveState } from './storage';

const currentState = loadState();

export const store = configureStore({
    reducer: {
        // @ts-expect-error - TypeScript has issues with preloadedState typing, but it works correctly at runtime
        shoppingCart: cartSlice,
    },
    preloadedState: currentState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    saveState(store.getState());
});
