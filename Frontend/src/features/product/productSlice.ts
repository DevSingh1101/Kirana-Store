import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProducts, productsArr } from "../../Constants";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        value: {
            isLoading: false,
            products: [] as unknown as IProducts[],
            name: "",
            address: "",
        },
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
        updateName: (state, action) => {
            const name = action.payload.name;
            state.value.name = name;
        },
        updateAddress: (state, action) => {
            const address = action.payload.address;
            state.value.address = address;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.value.isLoading = true;
            state.value.products = action.payload;
            state.value.isLoading = false;
        });
    },
});

export const fetchProducts = createAsyncThunk("/user", async () => {
    const data = productsArr;
    return data;
});

export const {
    setLoading,
    setProducts,
    updateQuantity,
    updateUnit,
    updateName,
    updateAddress,
} = productSlice.actions;

export default productSlice.reducer;
