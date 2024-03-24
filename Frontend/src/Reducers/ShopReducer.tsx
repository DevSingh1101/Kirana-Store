import { ActionTypes, TypeKeys } from "../Actions/ShopActions";
import { IOrderState } from "../Constants/Enum";

const ShopReducer = (state: IOrderState, action: ActionTypes): IOrderState => {
    switch (action.type) {
        case TypeKeys.UPDATE_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.productIndex) {
                        return {
                            ...product,
                            quantity: action.payload.newQuantity,
                        };
                    }
                    return product;
                }),
            };
        case TypeKeys.UPDATE_UNIT:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload.productIndex) {
                        return {
                            ...product,
                            unit: action.payload.newUnit,
                        };
                    }
                    return product;
                }),
            };
        default:
            return state;
    }
};

export default ShopReducer;
