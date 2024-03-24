import { ActionTypes, TypeKeys } from "../Actions/CartActions";
import { IProducts } from "../Constants/Enum";

const CartReducer = (state: IProducts[], action: ActionTypes): IProducts[] => {
    switch (action.type) {
        case TypeKeys.ADD_PRODUCT:
            return [...state, action.payload.product];
        case TypeKeys.REMOVE_PRODUCT:
            const indexToRemove = state.findIndex(
                (product) => product.id === action.payload.productId
            );

            if (indexToRemove !== -1) {
                const updatedProducts = [
                    ...state.slice(0, indexToRemove),
                    ...state.slice(indexToRemove + 1),
                ];
                return updatedProducts;
            }

            return state;
        default:
            return state;
    }
};

export default CartReducer;
