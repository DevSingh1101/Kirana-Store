import { createContext, useReducer } from "react";
import CartReducer from "../Reducers/CartReducer";
import { IProducts } from "../Constants/Enum";
import { addProduct, removeProduct } from "../Actions/CartActions";

const EMPTY_PRODUCTS: IProducts[] = [];

export const CartContext = createContext({
    cart: EMPTY_PRODUCTS,
    enterProduct: (product: IProducts) => {},
    exitProduct: (productId: number) => {},
});

export const CartProvider = (props: any) => {
    const [cart, dispatch] = useReducer(CartReducer, []);

    const enterProduct = (product: IProducts) => {
        dispatch(addProduct(product));
    };

    const exitProduct = (productId: number) => {
        dispatch(removeProduct(productId));
    };

    return (
        <CartContext.Provider value={{ cart, enterProduct, exitProduct }}>
            {props.children}
        </CartContext.Provider>
    );
};
