import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
    loading: boolean;
}

const initialState: LoadingState = {
    loading: true,
};

const loadingSlicer = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoading } = loadingSlicer.actions;
export default loadingSlicer.reducer;
