import { createContext, useReducer } from "react";
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

    return (
        <ShopContext.Provider value={{ state, changeQuantity, changeUnit }}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopProvider;
