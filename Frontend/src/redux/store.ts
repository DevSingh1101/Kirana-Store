import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/mainSlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customer/customerSlice";
import categoryReducer from "../features/category/categorySlice";
import cartReducer from "../features/cart/cartSlice";
import { saveState } from "./localStore";

export const store = configureStore({
    reducer: {
        main: mainReducer,
        category: categoryReducer,
        product: productReducer,
        customer: customerReducer,
        cart: cartReducer,
    },
});

// store.subscribe(() => {
//     saveState(store.getState());
// });

export type IRootState = ReturnType<typeof store.getState>;
