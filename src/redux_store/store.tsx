import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authslice";
import gigsReducer from "./slice/gigsSlice";
import ordersReducer from "./slice/ordersSlice";
import reviewsReducer from "./slice/reviewsSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "user",
    storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        gigs: gigsReducer,
        orders: ordersReducer,
        reviews: reviewsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REGISTER,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                ],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
