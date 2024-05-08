import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Key } from "react";
import newRequest from "@/app/utils/newRequest";

interface Gig {
    shortTitle: ReactNode;
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
    //currentreviews: any;
    id: Key | null | undefined;
    userId: string;
    username: string;
    data: Gig[];
    loading: boolean;
    error: string | null;
    currentGig: Gig | null; // Add currentGig property
    currentuserGig: Gig | [];
    filterGig: Gig | [];
}

const initialState: GigsState = {
    data: [],
    loading: false,
    error: null,
    currentGig: null,
    currentuserGig: [],
    id: undefined,
    userId: "",
    username: "",
    filterGig: [],
};

export const fetchGigsAsync = createAsyncThunk("gigs/fetchGigs", async () => {
    try {
        const response = await fetch("http://localhost:8000/gigs", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                //      Authorization: `Bearer ${token}`,
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

export const fetchGigsByFiltersAsync = createAsyncThunk(
    "gigs/fetchGigsByFilters",
    async ({
        minPrice = 1,
        maxPrice = 200,
    }: {
        minPrice: number;
        maxPrice: number;
    }) => {
        try {
            const response = await newRequest.get(
                `/gigs?min=${minPrice}&max=${maxPrice}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            return response.data;
        } catch (error) {
            throw new Error("Error fetching gigs");
        }
    }
);

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

export const fetchGigsByUserIdAsync = createAsyncThunk(
    "gigs/fetchGigsByUserId",
    async (userId: string) => {
        try {
            const response = await newRequest.get(
                `http://localhost:8000/gigs?userId=${userId}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, // Ensure credentials are included
                }
            );
            console.log(response.data);

            return response.data;
        } catch (error) {
            throw new Error("Error fetching gigs");
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
            })
            // .addCase(fetchGigsByUserIdAsync.pending, (state) => {
            //     state.loading = true;

            // })

            .addCase(fetchGigsByFiltersAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.filterGig = action.payload;
                state.error = null;
            })

            // .addCase(fetchGigsByUserIdAsync.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.error.message || "Failed to fetch gigs";
            // })
            .addCase(fetchGigsByUserIdAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGigsByUserIdAsync.fulfilled, (state, action) => {
                //console.log("action.payload----", action.payload);
                console.log(action.payload);

                state.loading = false;
                state.currentuserGig = action.payload; // Store the fetched gig in currentGig
                state.error = null;
            });
        // .addCase(fetchGigsByUserIdAsync.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error =
        //         action.error.message || "Failed to fetch gig by ID";
        // });
    },
});

// Export the reducer
export default gigsSlice.reducer;

// Define selectors to access the state

export const selectGigs = (state: { gigs: GigsState }) => state.gigs;
export const selectCurrentGig = (state: { gigs: GigsState }) =>
    state.gigs.currentGig;
export const selectCurrentUserGig = (state: RootState) =>
    state.gigs.currentuserGig;
export const selectFilterGig = (state: RootState) => state.gigs.filterGig;
