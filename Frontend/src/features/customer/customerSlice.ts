import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        value: {
            name: "",
            address: "",
        },
    },
    reducers: {
        updateName: (state, action) => {
            const name = action.payload.name;
            state.value.name = name;
        },
        updateAddress: (state, action) => {
            const address = action.payload.address;
            state.value.address = address;
        },
    },
});

export const { updateName, updateAddress } = customerSlice.actions;

export default customerSlice.reducer;
