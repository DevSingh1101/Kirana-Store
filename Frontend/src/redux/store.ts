import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/product/productSlice";

export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
