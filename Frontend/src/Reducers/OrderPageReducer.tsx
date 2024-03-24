import { ActionTypes, TypeKeys } from "../Actions/OrderPageActions";
import { ICategory, IOrderState } from "../Constants/Enum";

const OrderPageReducer = (
    state: IOrderState,
    action: ActionTypes
): IOrderState => {
    switch (action.type) {
        case TypeKeys.UPDATE_QUANTITY:
            return state;
        case TypeKeys.UPDATE_UNIT:
            return state;
        default:
            return state;
    }
};

export default OrderPageReducer;
