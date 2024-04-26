import { configureStore } from "@reduxjs/toolkit";
import gigsReducer from "./slice/gigs";

export const store = configureStore({
    reducer: {
        gigs: gigsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
