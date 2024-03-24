import { createContext, useReducer, useRef, useState } from "react";
import { initialState } from "../Constants/Enum";
import ShopReducer from "../Reducers/ShopReducer";
import { updateQuantity, updateUnit } from "../Actions/ShopActions";

export const ShopContext = createContext(initialState);

export const ShopProvider = (props: any) => {
    const [state, dispatch] = useReducer(ShopReducer, initialState);

    const changeQuantity = (productIndex: number, newQuantity: number) => {
        dispatch(updateQuantity(productIndex, newQuantity));
    };

    const changeUnit = (productIndex: number, newUnit: string) => {
        dispatch(updateUnit(productIndex, newUnit));
    };

    return (
        <ShopContext.Provider
            value={{ products: state.products, changeQuantity, changeUnit }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
