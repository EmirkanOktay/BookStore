import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "./LatestBookSlicer";

const apiLink = `https://www.googleapis.com/books/v1/volumes?q=1984&langRestrict=en&maxResults=1&key=&${apiKey}`;
const apiLink2 = `https://www.googleapis.com/books/v1/volumes?q=WarandPeace&langRestrict=en&maxResults=1&key=&${apiKey}`;
const apiLink3 = `https://www.googleapis.com/books/v1/volumes?q=Harry+Potter&langRestrict=en&maxResults=1&key=&${apiKey}`;
const apiLink4 = `https://www.googleapis.com/books/v1/volumes?q=Crime+and+Punishment&langRestrict=en&maxResults=1&key=&${apiKey}`;

interface BookState {
    load: string;
    error: string;
    books1984: any[];
    booksWarAndPeace: any[];
    booksHarryPotter: any[];
    booksCrimeAndPunishment: any[];
}


const initialState: BookState = {
    load: 'idle',
    error: '',
    books1984: [],
    booksWarAndPeace: [],
    booksHarryPotter: [],
    booksCrimeAndPunishment: []
};

export const get1984 = createAsyncThunk("latestBooks/get1984", async () => {
    const response = await axios.get(apiLink);
    const data = await response.data;
    return data;
});

export const getWarAndPeace = createAsyncThunk("latestBooks/getWarAndPeace", async () => {
    const response = await axios.get(apiLink2);
    const data = await response.data;
    return data;
});

export const getHarryPotter = createAsyncThunk("latestBooks/getHarryPotter", async () => {
    const response = await axios.get(apiLink3);
    const data = await response.data;
    return data;
});

export const getCrimeandPunishment = createAsyncThunk("latestBooks/CrimeandPunishment", async () => {
    const response = await axios.get(apiLink4);
    const data = await response.data;
    return data;
});


const latestBookSlicer = createSlice({
    name: "latestBooks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(get1984.pending, (state) => {
                state.load = "Loading";
                state.error = '';
            })
            .addCase(get1984.fulfilled, (state, action) => {
                state.load = "Succeeded";
                state.books1984 = action.payload.items;
            })
            .addCase(get1984.rejected, (state, action) => {
                state.load = 'Failed';
                state.error = action.error.message || "something went wrong";
            })

            .addCase(getWarAndPeace.pending, (state) => {
                state.load = "Loading";
                state.error = '';
            })
            .addCase(getWarAndPeace.fulfilled, (state, action) => {
                state.load = "Succeeded";
                state.booksWarAndPeace = action.payload.items;
            })
            .addCase(getWarAndPeace.rejected, (state, action) => {
                state.load = 'Failed';
                state.error = action.error.message || "something went wrong";
            })

            .addCase(getHarryPotter.pending, (state) => {
                state.load = "Loading";
                state.error = '';
            })
            .addCase(getHarryPotter.fulfilled, (state, action) => {
                state.load = "Succeeded";
                state.booksHarryPotter = action.payload.items;
            })
            .addCase(getHarryPotter.rejected, (state, action) => {
                state.load = 'Failed';
                state.error = action.error.message || "something went wrong";
            })

            .addCase(getCrimeandPunishment.pending, (state) => {
                state.load = "Loading";
                state.error = '';
            })
            .addCase(getCrimeandPunishment.fulfilled, (state, action) => {
                state.load = "Succeeded";
                state.booksCrimeAndPunishment = action.payload.items;
            })
            .addCase(getCrimeandPunishment.rejected, (state, action) => {
                state.load = 'Failed';
                state.error = action.error.message || "something went wrong";
            })
    }
})
export default latestBookSlicer.reducer;





