import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        loading: false,
        loggedIn: false,
        user: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload.loggedIn;
        },
    },
});

export const { setLoading } = mainSlice.actions;

export default mainSlice.reducer;
