import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        loading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
    },
});

export const { setLoading } = mainSlice.actions;

export default mainSlice.reducer;
