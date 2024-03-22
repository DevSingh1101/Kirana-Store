import { createContext, useReducer, useRef, useState } from "react";
import { initialState } from "../Constants/Enum";
import OrderPageReducer from "../Reducers/OrderPageReducer";
import { updateQuantity, updateUnit } from "../Actions/OrderPageActions";

export const ShopContext = createContext(initialState);
// const cartOrders = new Set();

export const ShopProvider = (props: any) => {
    const [state, dispatch] = useReducer(OrderPageReducer, initialState);
    // const cartOrders = useRef(new Set());
    const [cartItems, setCartItems] = useState(0);

    const changeQuantity = (
        categoryIndex: number,
        productIndex: number,
        newQuantity: number
    ) => {
        // const orderKey = `${categoryIndex} - ${productIndex}`;
        // if (Number.isNaN(newQuantity) || newQuantity <= 0) {
        //     cartOrders.current.delete(orderKey);
        // } else {
        //     cartOrders.current.add(orderKey);
        // }
        // setCartItems(cartOrders.current.size);
        dispatch(updateQuantity(categoryIndex, productIndex, newQuantity));
    };

    const changeUnit = (
        categoryIndex: number,
        productIndex: number,
        newUnit: string
    ) => {
        dispatch(updateUnit(categoryIndex, productIndex, newUnit));
    };

    return (
        <ShopContext.Provider
            value={{ state, changeQuantity, changeUnit, cartItems }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
