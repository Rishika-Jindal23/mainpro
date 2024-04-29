import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    country: string;
    isSeller: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

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

// Thunk to fetch all users
// export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
//     const response = await axios.get("http://localhost:8000/users");
//     return response.data;
// });*****************

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
    try {
        const response = await axios.get("http://localhost:8000/users", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
            },
            // credentials: "include",
        });
        return response.data;
    } catch (error) {
        throw new Error("Error fetching gigs");
    }
});

// Thunk to fetch user by ID
export const fetchUserById = createAsyncThunk(
    "auth/fetchUserById",
    async (userId: string) => {
        const response = await axios.get(
            `http://localhost:8000/users/${userId}`,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${token}`,
                },
            }
        );
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
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(fetchUserById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(fetchUserById.rejected, (state) => {
                state.status = "failed";
            });
    },

    // *************************
});

export const { login, logout } = authSlice.actions;

export const isAuthenticated = (state: { auth: authState }) =>
    state.auth.isAuthenticated;
// export const user = (state: { auth: authState }) => state.auth.user;
export const user = (state: { auth: authState }) => state.auth.user;
export const token = (state: { auth: authState }) => state.auth.token;
export const users = (state: { auth: authState }) => state.auth.users;

export default authSlice.reducer;
