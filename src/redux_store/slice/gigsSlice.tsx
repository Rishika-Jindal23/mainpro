// import { createSlice } from "@reduxjs/toolkit";

// interface Gig {
//     _id: string;
//     userId: string;
//     title: string;
//     desc: string;
//     totalstars: number;
//     starNumber: string;
//     cat: string;
//     price: number;
//     cover: string;
//     images: string[];
//     shortDesc: string;
//     deliveryTime: number;
//     revisionNumber: number;
//     features: string[]; // You may need to define a proper type for features if it has a specific structure
//     sales: number;
//     username: string;
// }
// interface GigsState {
//     gigs: Gig[];
//     gig: Gig[];
//     deletedGigs: Gig[];
//     status: "idle" | "loading" | "succeeded" | "failed";
//     error: string | null;
// }

// const initialState: GigsState = {
//     gigs: [],
//     gig: [],
//     deletedGigs: [],
//     status: "idle",
//     error: null,
// };

// const gigsSlice = createSlice({
//     name: "gigs",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {},
// });
// export default gigsSlice.reducer;
//************************************************* */

// slices/gigsSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Key } from "react";

interface Gig {
    id: Key | null | undefined;
    deliveryTime: Number;
    revisionNumber: Number;
    cat: string;
    starNumber: Number;
    totalstars: Number;
    username: string;
    _id: string;
    userId: string;
    title: string;
    desc: string;
    price: number;
    sales: number;
    cover: string;
    createdAt: string;
    images: string;
    shortDesc: string;
}

interface GigsState {
    id: Key | null | undefined;
    userId: ReactNode;
    username: ReactNode;
    data: Gig[];
    loading: boolean;
    error: string | null;
    currentGig: Gig | null; // Add currentGig property
}

const initialState: GigsState = {
    data: [],
    loading: false,
    error: null,
    currentGig: null, // Initialize currentGig as null
};

export const fetchGigsAsync = createAsyncThunk("gigs/fetchGigs", async () => {
    try {
        const response = await fetch("http://localhost:8000/gigs", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
            },
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching gigs");
    }
});

export const fetchGigByIdAsync = createAsyncThunk(
    "gigs/fetchGigById",
    async (id: string, thunkAPI) => {
        try {
            const response = await fetch(
                `http://localhost:8000/gigs/single/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch gig");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const gigsSlice = createSlice({
    name: "gigs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle fetchGigsAsync
            .addCase(fetchGigsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGigsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchGigsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch gigs";
            })
            // Handle fetchGigByIdAsync
            .addCase(fetchGigByIdAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGigByIdAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.currentGig = action.payload; // Store the fetched gig in currentGig
                state.error = null;
            })
            .addCase(fetchGigByIdAsync.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Failed to fetch gig by ID";
            });
    },
});

// Export the reducer
export default gigsSlice.reducer;

// Define selectors to access the state

export const selectGigs = (state: { gigs: GigsState }) => state.gigs;
export const selectCurrentGig = (state: { gigs: GigsState }) =>
    state.gigs.currentGig;
