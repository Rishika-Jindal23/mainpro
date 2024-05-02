// // reviewsSlice.js
// import newRequest from "@/app/utils/newRequest";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { RootState } from "../store";

// // Async thunk for fetching reviews by gigId
// export const fetchReviewsByGigId = createAsyncThunk(
//     "reviews/fetchReviewsByGigId",
//     async (gigId, thunkAPI) => {
//         try {
//             const response = await newRequest.get(`/api/reviews/${gigId}`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// // Reviews slice
// const reviewsSlice = createSlice({
//     name: "reviews",
//     initialState: {
//         reviews: [],
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: {
//         [fetchReviewsByGigId.pending]: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         [fetchReviewsByGigId.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.currentreviews = action.payload;
//         },
//         [fetchReviewsByGigId.rejected]: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//     },
// });

// export default reviewsSlice.reducer;
// export const reviews = (state: RootState) => state.gigs.reviews;
// reviewsSlice.ts
import newRequest from "@/app/utils/newRequest";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface Review {
    id: number;
    star: number;
    desc: string;
    currentreviews: [];
}

// Define the thunk to fetch reviews by gigId
export const fetchReviewsByGigId = createAsyncThunk<
    Review[],
    number,
    {
        rejectValue: string;
    }
>("reviews/fetchReviewsByGigId", async (gigId, thunkAPI) => {
    try {
        const response = await newRequest.get(`reviews/${gigId}`);
        return response.data as Review[];
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Define the initial state and reducers
const initialState = {
    reviews: [] as Review[],
    loading: false,
    error: null as string | null,
    currentreviews: [] as Review[],
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewsByGigId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviewsByGigId.fulfilled, (state, action) => {
                state.loading = false;
                state.currentreviews = action.payload;
            })
            .addCase(fetchReviewsByGigId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default reviewsSlice.reducer;
export const currentreviews = (state: RootState) => state.gigs.currentreviews;
