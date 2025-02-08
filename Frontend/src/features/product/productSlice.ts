import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductState } from "../../types";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        value: {
            isLoading: false,
            products: [] as unknown as IProduct[],
        } as IProductState,
    },
    reducers: {
        setLoading: (state, action) => {
            state.value.isLoading = action.payload.isLoading;
        },
        setProducts: (state, action) => {
            state.value.products = action.payload.products;
        },
        updateQuantity: (state, action) => {
            const quantity = action.payload.quantity;
            const id = action.payload.id;
            state.value.products = state.value.products.map((product) => {
                return product.id === id
                    ? { ...product, quantity: quantity }
                    : product;
            });
        },
        updateUnit: (state, action) => {
            const unit = action.payload.unit;
            const id = action.payload.id;
            state.value.products = state.value.products.map((product) => {
                return product.id === id ? { ...product, unit: unit } : product;
            });
        },
    },
});

export const { setLoading, setProducts, updateQuantity, updateUnit } =
    productSlice.actions;

export default productSlice.reducer;
