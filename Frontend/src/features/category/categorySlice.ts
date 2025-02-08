import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../types";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: {
            categories: [] as ICategory[],
        },
    },
    reducers: {
        setCategories: (state, action) => {
            state.value.categories = action.payload.categories;
        },
        addCategories: (state, action) => {
            state.value.categories.push(action.payload.category);
        },
    },
});

export const { setCategories, addCategories } = categorySlice.actions;

export default categorySlice.reducer;
