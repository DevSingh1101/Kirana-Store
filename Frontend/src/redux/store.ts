import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";
import categoryReducer from "../features/category/categorySlice";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        category: categoryReducer,
        product: productReducer,
        customer: customerReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
