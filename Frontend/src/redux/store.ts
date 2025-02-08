import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";
import categoryReducer from "../features/category/categorySlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        customer: customerReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
