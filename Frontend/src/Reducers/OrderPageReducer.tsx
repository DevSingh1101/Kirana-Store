import { ActionTypes, TypeKeys } from "../Actions/OrderPageActions";
import { ICategory } from "../Constants/Enum";

const OrderPageReducer = (
    state: ICategory[],
    action: ActionTypes
): ICategory[] => {
    switch (action.type) {
        case TypeKeys.UPDATE_QUANTITY:
            state[action.payload.categoryIndex].products[
                action.payload.productIndex
            ].quantity = action.payload.newQuantity;
            return state;
        case TypeKeys.UPDATE_UNIT:
            state[action.payload.categoryIndex].products[
                action.payload.productIndex
            ].unit = action.payload.newUnit;
            return state;
        default:
            return state;
    }
};

export default OrderPageReducer;
