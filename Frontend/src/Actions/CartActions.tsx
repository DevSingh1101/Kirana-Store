import { IProducts } from "../Constants/Enum";

export enum TypeKeys {
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

interface AddProduct {
    type: TypeKeys.ADD_PRODUCT;
    payload: {
        product: IProducts;
    };
}

const addProduct = (product: IProducts): AddProduct => {
    return {
        type: TypeKeys.ADD_PRODUCT,
        payload: { product },
    };
};

interface RemoveProduct {
    type: TypeKeys.REMOVE_PRODUCT;
    payload: {
        productId: number;
    };
}

const removeProduct = (productId: number): RemoveProduct => {
    return {
        type: TypeKeys.REMOVE_PRODUCT,
        payload: {
            productId: productId,
        },
    };
};

export { addProduct, removeProduct };

export type ActionTypes = AddProduct | RemoveProduct;
