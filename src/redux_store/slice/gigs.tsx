import { createSlice } from "@reduxjs/toolkit";

interface Gig {
    _id: string;
    userId: string;
    title: string;
    desc: string;
    totalstars: number;
    starNumber: string;
    cat: string;
    price: number;
    cover: string;
    images: string[];
    shortDesc: string;
    deliveryTime: number;
    revisionNumber: number;
    features: string[]; // You may need to define a proper type for features if it has a specific structure
    sales: number;
    username: string;
}
interface GigsState {
    gigs: Gig[];
    gig: Gig[];
    deletedGigs: Gig[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: GigsState = {
    gigs: [],
    gig: [],
    deletedGigs: [],
    status: "idle",
    error: null,
};

const gigsSlice = createSlice({
    name: "gigs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});
export default gigsSlice.reducer;
