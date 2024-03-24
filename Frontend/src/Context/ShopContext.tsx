import { createContext, useReducer, useRef, useState } from "react";
import { initialState } from "../Constants/Enum";
import OrderPageReducer from "../Reducers/OrderPageReducer";
import { updateQuantity, updateUnit } from "../Actions/OrderPageActions";

export const ShopContext = createContext(initialState);

export const ShopProvider = (props: any) => {
    const [state, dispatch] = useReducer(OrderPageReducer, initialState);

    const changeQuantity = (
        categoryIndex: number,
        productIndex: number,
        newQuantity: number
    ) => {
        dispatch(updateQuantity(categoryIndex, productIndex, newQuantity));
    };

    const changeUnit = (
        categoryIndex: number,
        productIndex: number,
        newUnit: string
    ) => {
        dispatch(updateUnit(categoryIndex, productIndex, newUnit));
    };

    const value = {};

    return (
        <ShopContext.Provider
            value={{ products: state.products, changeQuantity, changeUnit }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
