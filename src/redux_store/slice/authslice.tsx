import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface authState {
    isAuthenticated: boolean;

    user: [];
    users: [];
    token: string;
    status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: authState = {
    isAuthenticated: false,
    user: [],
    users: [],
    token: "",
    status: "idle",
};

export const fetchUsers = createAsyncThunk(
    "notes/users",
    async (user: string) => {
        console.log("user id : ", user);
        const response = await axios.get(" http://localhost:8000/users");
        //console.log("users : ",response);
        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log("login reducer ", action.payload);
            state.isAuthenticated = true;
            state.user = action.payload;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = [];
            state.token = "";
        },
        //    update : (state, action) =>
        //    {
        //       state.user = action.payload;
        //    }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
                console.log("action.payload : ", action.payload);
                console.log("state.notes : ", state.users);
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "An error occurred.";
            });
    },
});

export const { login, logout } = authSlice.actions;

export const isAuthenticated = (state: { auth: authState }) =>
    state.auth.isAuthenticated;
export const user = (state: { auth: authState }) => state.auth.user;
export const token = (state: { auth: authState }) => state.auth.token;
export const users = (state: { auth: authState }) => state.auth.users;

export default authSlice.reducer;
