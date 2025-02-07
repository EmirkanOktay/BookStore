import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (query: string) => {
        const apiLink = `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=en&maxResults=28&key$={apiKey}`;

        const response = await axios.get(apiLink);
        return response.data.items || [];
    }
);

export interface SearchState {
    query: string;
    books: any[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    query: "",
    books: [],
    loading: false,
    error: null,
};

const queryBookSlicer = createSlice({
    name: "queryBook",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload.map((book: any) => ({
                    ...book,
                    price: (Math.floor(Math.random() * 91) + 10).toFixed(2)
                }));
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export const { setQuery } = queryBookSlicer.actions;

export default queryBookSlicer.reducer;
