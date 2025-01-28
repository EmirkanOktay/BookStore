import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_Book_Key;
const apiLink = `https://www.googleapis.com/books/v1/volumes?q=publishedDate:2025&maxResults=4&key=&${apiKey}`;

export interface BookState {
    load: string;
    error: string;
    books: any[];
}

const initialState: BookState = {
    load: 'idle',
    error: '',
    books: [],
};

export const getLatestBook = createAsyncThunk("getLastBooks", async () => {

    const response = await axios.get(apiLink);
    const data = await response.data;
    return data
})

const latestBookSlicer = createSlice({
    name: "latestBooks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLatestBook.pending, (state) => {
                state.load = "Loading";
                state.error = '';
            })
            .addCase(getLatestBook.fulfilled, (state, action) => {
                state.load = "Succeeded";
                state.books = action.payload.items;
            })
            .addCase(getLatestBook.rejected, (state, action) => {
                state.load = 'Failed';
                state.error = action.error.message || "something went wrong";
            })
    }
})
export default latestBookSlicer.reducer;
