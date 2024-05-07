import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import { RootState } from "./../store";
import newRequest from "@/app/utils/newRequest";

interface Conversation {
    updatedAt(updatedAt: any): unknown;
    id: string;
    sellerId: string;
    buyerId: string;
    readBySeller: boolean;
    readByBuyer: boolean;
    lastMessage?: string;
    createdAt: any;
    updatedAt: any;
}

interface ConversationState {
    conversations: Conversation[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
}

export const fetchConversations = createAsyncThunk<
    Conversation[],
    void,
    { rejectValue: string }
>("conversation/fetchConversations", async (_, thunkAPI) => {
    try {
        const response = await newRequest.get("/conversations");
        return response.data as Conversation[];
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const initialState: ConversationState = {
    conversations: [],
    loading: "idle",
    error: null,
};

const conversationSlice = createSlice({
    name: "conversation",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConversations.pending, (state) => {
                state.loading = "pending";
            })
            .addCase(fetchConversations.fulfilled, (state, action) => {
                state.loading = "succeeded";
                state.conversations = action.payload;
            })
            .addCase(fetchConversations.rejected, (state, action) => {
                state.loading = "failed";
                state.error = action.payload as string;
            });
    },
});

export default conversationSlice.reducer;
export const selectConversations = (state: RootState) =>
    state.conversation.conversations;
