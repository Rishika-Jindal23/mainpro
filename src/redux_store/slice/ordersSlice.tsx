import newRequest from "@/app/utils/newRequest";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Order {
    _id: string;
    gigId: string;
    title: string;
    price: number;
    sellerId: string;
    buyerId: string;
    isCompleted: boolean;
    payment_intent: string;
}

// Define the initial state
const initialState: {
    orders: Order[];
    error: string | null;
} = {
    orders: [],
    error: null,
};

// Define the thunk function to fetch orders data
export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    try {
        const response = await newRequest.get(
            "http://localhost:8000/orders"
            // {
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     credentials: "include",
            // }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw error;
    }
});

// Define the orders slice
export const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.error = action.error.message || "Error fetching orders";
            });
    },
});

export default ordersSlice.reducer;
export const orders = (state: { orders: Order }) => state.orders;
