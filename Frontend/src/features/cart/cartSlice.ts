import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [] as unknown as IProduct[],
        name: "",
        address: "",
    },
    reducers: {
        setCartItems: (state, action) => {
            state.items = action.payload.products;
        },
        resetCartItems: (state) => {
            state.items = [];
        },
        updateCartItem: (state, action) => {
            const items = state.items;
            const product = action.payload.product as unknown as IProduct;

            state.items = items.map((item) => {
                return item.id === product.id ? product : item;
            });
        },
        addCartItem: (state, action) => {
            const items = state.items;
            const product = action.payload.product as unknown as IProduct;

            state.items = [...items, product];
        },
        removeCartItems: (state, action) => {
            const items = state.items;
            const product = action.payload.product as unknown as IProduct;
            state.items = items.filter((item) => {
                return item.id !== product.id;
            });
        },
    },
});

export const {
    updateCartItem,
    addCartItem,
    removeCartItems,
    setCartItems,
    resetCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
