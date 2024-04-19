"use client";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from ".";
import { PersistGate } from "redux-persist/integration/react";
// import store from "@/Store";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}{" "}
            </PersistGate>
        </Provider>
    );
};

export default Providers;
