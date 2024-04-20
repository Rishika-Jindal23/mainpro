import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
    // Define your user properties here
    _id: string;
    username: string;
    email: string;
    isSeller: boolean;
    phone: string;
    // username:string;
    // Add other user properties
}

interface authState {
    isAuthenticated: boolean;
    user: User | null;
}

const initialState: authState = {
    isAuthenticated: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            console.log("heheee");
            console.log("login reducer ", action.payload);

            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export const isAuthenticated = (state: { auth: authState }) =>
    state.auth.isAuthenticated;
export const user = (state: { auth: authState }) => state.auth.user;

export default authSlice.reducer;
