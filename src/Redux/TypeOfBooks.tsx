import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiKey } from "./LatestBookSlicer";


export const fetcBookshWithType = createAsyncThunk(
    "books/fetchBooksForType",
    async (genre: string) => {
        const apiLink = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&langRestrict=en&maxResults=28&key=&${apiKey}`;

        const response = await axios.get(apiLink);
        const data = await response.data.items;
        return data;
    }

)

interface genreForBook {
    genre: string,
    booksGenre: [],
    loadingForGenre: boolean,
    errorForGenre: null | string
}

const initialState: genreForBook = {
    genre: "",
    booksGenre: [],
    loadingForGenre: false,
    errorForGenre: null,
}

const genreBookSlicer = createSlice({
    name: "genreBook",
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetcBookshWithType.pending, (state) => {
                state.loadingForGenre = true;
                state.errorForGenre = null;
            })
            .addCase(fetcBookshWithType.fulfilled, (state, action) => {
                state.loadingForGenre = false;
                state.booksGenre = action.payload.map((book: any) => ({
                    ...book,
                    price: (Math.floor(Math.random() * 91) + 10).toFixed(2),
                }));
            })
            .addCase(fetcBookshWithType.rejected, (state, action) => {
                state.loadingForGenre = false;
                state.errorForGenre = action.error.message || "An error occurred";
            })
    }
})
export const { setGenre } = genreBookSlicer.actions;

export default genreBookSlicer.reducer;