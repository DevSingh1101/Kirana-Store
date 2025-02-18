import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
    name?: string;
    phoneNumber: string;
    address?: string;
    role: "ADMIN" | "USER";
}

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        loading: false,
        user: null as unknown as IUser,
        accessToken: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        logout: (state) => {
            state.user = null as unknown as IUser;
            state.accessToken = null;
        },
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
    },
});

export const { setLoading, setCredentials, logout } = mainSlice.actions;

export default mainSlice.reducer;
